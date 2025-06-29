"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { Form, Input } from "reactstrap";
import { useAuth } from "@/Providers/SessionProvider";
import VerificationCode from "../Forms/FormLayout/TwoFactor/EmailVerification/VerificationCode";

const EmailForm = ({ onSubmit, loading }: { onSubmit: (email: string) => void; loading: boolean }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    onSubmit(email);
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
      <Form className="login-form__inputs" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="input-dark"
        />
        <button
          type="submit"
          className="btn-chipped"
          disabled={loading}
        >
          {loading ? "Signing in..." : "CONTINUE"}
        </button>
        <p className="login-form__terms">
          By continuing, you agree to{" "}
          <Link href="/terms">Post Clips Terms of Use</Link>
        </p>
      </Form>
    </div>
  );
};

const UserForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();

  const handleLogin = async (email: string) => {
    setLoading(true);
    try {
      const result = await signIn(email);
      if (result?.showVerification) {
        setEmail(email);
      }
    } finally {
      setLoading(false);
    }
  };

  return email ? (
    <VerificationCode email={email} />
  ) : (
    <EmailForm onSubmit={handleLogin} loading={loading} />
  );
};

export default UserForm;
