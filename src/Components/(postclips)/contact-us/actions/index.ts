'use server';

import { fetchAPI } from '@/Clients/postclips/server/ApiClient';

// Create a server action for the contact form submission
export async function submitContactForm(formData: any) {
    try {
        const response = await fetchAPI(
            'POST',
            '/contact/submit',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }
        );

        return { success: true, data: response };
    } catch (error) {
        console.error('Form submission error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An error occurred while submitting the form'
        };
    }
}