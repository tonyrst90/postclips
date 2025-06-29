import { useState } from "react";
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";

export interface FeedbackInput {
  description: string;
  screenshot?: File | null;
}

function getErrorMessage(error: any): string {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (typeof error === "object" && error.message) return error.message;
  return JSON.stringify(error);
}

export const useFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitFeedback = async (input: FeedbackInput) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      let response;
      if (input.screenshot) {
        const formData = new FormData();
        formData.append("description", input.description);
        formData.append("screenshot", input.screenshot);
        response = await fetchAPI("POST", "/feedback/submit", formData, {
          headers: { "Content-Type": undefined }, // Let browser set boundary
        });
      } else {
        response = await fetchAPI("POST", "/feedback/submit", { description: input.description });
      }
      if (response.success) {
        setSuccess(true);
        return response.data;
      } else {
        setError(getErrorMessage(response.error));
      }
    } catch (err: any) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return { submitFeedback, loading, error, success };
};
