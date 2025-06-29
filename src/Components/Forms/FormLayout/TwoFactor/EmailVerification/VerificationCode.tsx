"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Form, Input } from "reactstrap";
import { useAuth } from "@/Providers/SessionProvider";
import { handleApiError } from "@/Clients/postclips/server/errorHandler";
import { toast } from "react-toastify";

const VerificationCode = ({ email }: { email: string }) => {
  const { verifyOtp, signIn } = useAuth();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (e: string, index: number) => {
    if (e.length > 1) return;
    const tempOtp = [...otp];
    tempOtp[index] = e;
    setOtp(tempOtp);

    // Auto-focus next input
    if (e && index < 5) {
      const nextInput = document.querySelector(`input[name=otp-${index + 1}]`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (pastedData.length === 6 && /^\d{6}$/.test(pastedData)) {
      setOtp(pastedData.split(""));
    }
  };

  const handlePasteCode = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const pastedData = clipboardText.trim();
      if (pastedData.length === 6 && /^\d{6}$/.test(pastedData)) {
        setOtp(pastedData.split(""));
        toast.success("Code pasted successfully!");
      } else {
        toast.error("Invalid code format. Please copy a 6-digit code.");
      }
    } catch (error) {
      toast.error("Could not access clipboard. Please paste manually.");
    }
  };

  const handleResendCode = async () => {
    if (!canResend) return;
    
    setLoading(true);
    try {
      const result = await signIn(email);
      if (result?.showVerification) {
        setResendTimer(60);
        setCanResend(false);
        toast.success("New code sent successfully!");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    setLoading(true);
    try {
      await verifyOtp(email, otpCode);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__header">
        <Image
          src="/assets/images/(postclips)/logos/logo.svg"
          alt="PostClips"
          width={143}
          height={32}
          priority
        />
      </div>
      <div className="login-form__content">
        <h4 className="text-white">Enter Verification Code</h4>
        <p>We've sent a verification code to {email}</p>
      </div>
      <Form className="login-form__inputs" onSubmit={handleVerify}>
        <div className="otp-inputs">
          {otp.map((value, index) => (
            <Input
              key={index}
              name={`otp-${index}`}
              value={value}
              type="number"
              maxLength={1}
              className="otp-input"
              onChange={(e) => handleChange(e.target.value, index)}
              onPaste={handlePaste}
              disabled={loading}
            />
          ))}
        </div>
        <p className="login-form__paste">
          <span 
            className="link"
            onClick={handlePasteCode}
            style={{ cursor: 'pointer' }}
          >
            Paste code
          </span>
        </p>
        <button
          type="submit"
          className="btn-chipped"
          disabled={loading}
        >
          {loading ? "Verifying..." : "VERIFY"}
        </button>
        <p className="login-form__terms">
          Didn't receive a code?{" "}
          {canResend ? (
            <span 
              className="link"
              onClick={handleResendCode}
              style={{ cursor: 'pointer' }}
            >
              Resend code
            </span>
          ) : (
            <span className="text-muted">
              Resend in {resendTimer}s
            </span>
          )}
        </p>
      </Form>
    </div>
  );
};

export default VerificationCode;
