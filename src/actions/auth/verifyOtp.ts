import { supabase } from "@/Clients/supabase/SupabaseClient";

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const { error, data } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    console.log("verifyOtp", { error, data });

    if (error) {
      return { error: true };
    } else if (data) {
      if (!data.user?.user_metadata?.username) {
        // Update user metadata
        const user = await supabase.auth.getUser();
        console.log(user);
      }
      // OTP verified successfully
      // You can redirect the user or perform other actions here
      return { success: true };
    }
  } catch (error) {
    return { error: true };
  }
};
