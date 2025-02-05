"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const params = useParams<{ username: string }>();
  const [loading, setLoading] = useState(false);

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/auth/verify-code", {
        username: params.username,
        code: otp,
      });
      toast.success("OTP verified successfully!");
      setOtp("");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Verify OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputOTP maxLength={6} value={otp} onChange={handleChange}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </form>
      </div>
    </div>
  );
}
