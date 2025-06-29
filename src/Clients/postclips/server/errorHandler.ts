import { ErrorResponse } from "./ApiClient";
import { toast } from "react-toastify";

export const handleApiError = (error: any): string => {
  let errorMessage = "An error occurred";

  // Handle API response error
  if (error?.response?.data) {
    const apiError = error.response.data;
    errorMessage = typeof apiError === 'string' 
      ? apiError 
      : apiError.error || apiError.message || "An error occurred";
  }
  // Handle our custom ApiResponse error
  else if (typeof error === 'object' && 'error' in error) {
    errorMessage = typeof error.error === 'string'
      ? error.error
      : error.error?.error || error.error?.message || "An error occurred";
  }
  // Handle general errors
  else {
    errorMessage = error?.message || "An error occurred";
  }

  // Show toast and return the message
  toast.error(errorMessage);
  return errorMessage;
}; 