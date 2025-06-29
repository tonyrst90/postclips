// UploadBox.tsx
import React from 'react';

interface UploadBoxProps {
    label: string;
    onFileChange: (file: File | null) => void;
    accept?: string;
    previewUrl?: string;
    children?: React.ReactNode;
}

const UploadBox: React.FC<UploadBoxProps> = ({ label, onFileChange, accept, previewUrl, children }) => (
    <div
        style={{
            border: '2px dashed #333',
            borderRadius: 8,
            background: '#181818',
            color: '#fff',
            width: 200,
            height: 140,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom: 16,
            position: 'relative'
        }}
        onClick={() => document.getElementById(label)?.click()}
    >
        <input
            type="file"
            id={label}
            accept={accept}
            style={{ display: 'none' }}
            onChange={e => onFileChange(e.target.files?.[0] || null)}
        />
        {previewUrl ? (
            children
        ) : (
            <>
                <div className="upload-icon d-flex align-items-center justify-content-center mb-2">
                    ↑
                </div>
                <div>Upload file</div>
            </>
        )}
    </div>
);

export default UploadBox;