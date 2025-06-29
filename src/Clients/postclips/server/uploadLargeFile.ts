"use client"
// Clients/postclips/client/uploadClient.ts
import axios from 'axios';
import * as tus from 'tus-js-client';
import { ApiResponse } from '../server/ApiClient';

interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

/**
 * Upload large files using TUS protocol (Cloudflare's recommended approach)
 */
/**
 * Upload files using Cloudflare's one-time upload URL
 * This is the simplest and most reliable method
 */
export const uploadLargeFile = async (
  campaignId: string,
  file: File,
  metadata: {
    title: string;
    description?: string;
    season?: string;
  },
  token: string,
  onProgress?: (progress: UploadProgress) => void
): Promise<ApiResponse<{ data: any }>> => {
  try {
    if (!token) {
      throw new Error('Authentication token is required');
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api';
    const fileSizeMB = file.size / (1024 * 1024);

    console.log(`Starting upload for ${file.name} (${fileSizeMB.toFixed(2)}MB)`);

    // Step 1: Get one-time upload URL from backend
    console.log('Step 1: Getting upload URL from backend...');
    const uploadUrlResponse = await axios.post(
      `${backendUrl}/campaigns/${campaignId}/cloudflare-upload-url`,
      {
        filename: file.name,
        filesize: file.size
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!uploadUrlResponse.data.success) {
      throw new Error(uploadUrlResponse.data.error || 'Failed to get upload URL');
    }

    const { uploadUrl, videoId } = uploadUrlResponse.data.data;
    console.log('Got upload URL and video ID:', videoId);

    // Step 2: Upload directly to Cloudflare
    console.log('Step 2: Uploading to Cloudflare...');
    
    // Create form data
    const formData = new FormData();
    formData.append('file', file);

    // Use XMLHttpRequest for progress tracking
    const xhr = new XMLHttpRequest();
    
    return new Promise((resolve, reject) => {
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable && onProgress) {
          const percentage = Math.round((event.loaded / event.total) * 100);
          onProgress({
            loaded: event.loaded,
            total: event.total,
            percentage
          });
        }
      });

      xhr.addEventListener('load', async () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Upload to Cloudflare complete');
          
          try {
            // Step 3: Create campaign content record
            console.log('Step 3: Creating campaign content record...');
            const contentResponse = await axios.post(
              `${backendUrl}/campaigns/${campaignId}/content`,
              {
                videoId,
                title: metadata.title,
                description: metadata.description,
                season: metadata.season,
                content_type: 'file'
              },
              {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              }
            );

            if (!contentResponse.data.success) {
              throw new Error(contentResponse.data.error || 'Failed to create content record');
            }

            resolve({
              success: true,
              data: {
                data: contentResponse.data.data
              }
            });
          } catch (error: any) {
            reject(new Error(error.response?.data?.error || error.message || 'Failed to create content record'));
          }
        } else {
          reject(new Error(`Upload failed with status: ${xhr.status}`));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Network error during upload'));
      });

      xhr.addEventListener('abort', () => {
        reject(new Error('Upload cancelled'));
      });

      // Send the request
      xhr.open('POST', uploadUrl);
      xhr.send(formData);
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    return {
      success: false,
      error: error.response?.data?.error || error.message || 'Upload failed'
    };
  }
};

export const checkVideoStatus = async (
  videoId: string,
  token: string
): Promise<ApiResponse<{
  status: string;
  progress: number;
  ready: boolean;
  error?: string;
  video?: {
    streamUrl: string;
    thumbnailUrl: string;
    duration: number;
  };
}>> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api';
    
    const response = await axios.get(
      `${backendUrl}/campaigns/video-status/${videoId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return {
      success: true,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.error || error.message
    };
  }
};

/**
 * Upload link content (no file)
 */
export const uploadLinkContent = async (
  campaignId: string,
  data: {
    title: string;
    description?: string;
    content_url: string;
    thumbnail_url: string;
    season?: string;
  },
  token: string // Token is now passed as parameter
): Promise<ApiResponse<{ data: any }>> => {
  try {
    if (!token) {
      throw new Error('Authentication token is required');
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api';

    const response = await axios.post(
      `${backendUrl}/campaigns/${campaignId}/content`,
      {
        ...data,
        content_type: 'link'
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      success: true,
      data: response.data.data
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.error || error.message
    };
  }
};

// Legacy functions - keeping for backwards compatibility but they redirect to the new flow
export const getCloudflareUploadUrl = async (
  campaignId: string,
  title: string,
  token: string
): Promise<ApiResponse<{ uploadUrl: string; videoId: string }>> => {
  console.warn('getCloudflareUploadUrl is deprecated. Use uploadLargeFile instead.');
  return { success: false, error: 'Deprecated function' };
};

export const uploadToCloudflare = async (
  file: File,
  uploadUrl: string,
  onProgress?: (percent: number) => void
): Promise<ApiResponse> => {
  console.warn('uploadToCloudflare is deprecated. Use uploadLargeFile instead.');
  return { success: false, error: 'Deprecated function' };
};

export const finalizeCloudflareUpload = async (
  campaignId: string,
  videoId: string,
  metadata: any,
  token: string
): Promise<ApiResponse> => {
  console.warn('finalizeCloudflareUpload is deprecated. Use uploadLargeFile instead.');
  return { success: false, error: 'Deprecated function' };
};