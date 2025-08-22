"use client";

import { useState, useEffect } from "react";
import sendotp from "@/actions/sendotpForget";
import otpauth from "@/actions/Forgetauth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const router=useRouter();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email before sending OTP.")
      return;
    }

    setTimer(120);
    const res = await sendotp(email);
    if (res) {
      toast.success("OTP sent to your email!")
      setOtpSent(true);
    } else {
      toast.error("Invalid Email!")
      setTimer(10);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const result = await otpauth(otp, password, email);
    if (!result) toast.error("Enter Valid OTP!")
    else{

      toast.success("Password reset successfully!")
      router.push("/Login")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xl p-10 bg-white shadow-lg rounded-2xl">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
            <span className="text-white text-lg font-bold">🔒</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center">Forgot Password</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Reset your account password securely
        </p>

        <form onSubmit={handleSave}>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <label className="block text-sm font-medium mb-1">Email Verification</label>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="button"
            onClick={handleSendOtp}
            disabled={timer > 0}
            className={`w-full py-2 rounded-lg mb-4 ${
              timer > 0
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {timer > 0
              ? `Resend OTP in ${Math.floor(timer / 60)}:${
                  (timer % 60).toString().padStart(2, "0")
                }`
              : otpSent
              ? "Resend OTP"
              : "Send OTP"}
          </button>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
