"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const params = useParams<{ username: string }>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      router.push("/sign-in");
    } catch (error) {
      toast.error(error || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20 ">
      <div className="w-full max-w-md p-20 bg-white border border-gray-200 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-2">
          Verify your email
        </h2>
        <div className="flex justify-center mb-8">
          <p className="text-center text-gray-600 w-80">
            Enter the 8 digit code you have received on {}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <p>Code</p>
          <InputOTP maxLength={8} value={otp} onChange={handleChange}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </InputOTP>

          <Button type="submit" className="w-full uppercase" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </div>
    </div>
  );
}
