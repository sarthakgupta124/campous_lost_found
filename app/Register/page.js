"use client"
import React from 'react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import register from '../../actions/register'
import sendotpregister from '@/actions/sendotpregister'
import { useEffect } from 'react'
import registereOtpauth from '@/actions/regiOtpauth'
import { toast } from 'react-toastify'
const Register = () => {
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const router = useRouter();
  const [form, setform] = useState({ name: "", contact: "", email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( await registereOtpauth(otp, form.email)) {
      try {
        const result = await register(form);
        if (result) {
          toast.success("User created!");
          setform({ name: "", contact: "", email: "", password: "" });
          router.push("/Login");
        }
        else {
          toast.error("User Already exists!")
          setform({ ...form, email: "" });
        }

      } catch (err) {
        toast.error("Something went wrong. Please try again.")
      }
    }
    else toast.error("Enter Valid OTP");

  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



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
    if (!form.email) {
      toast.error("Please enter your email before sending OTP.");
      return;
    }

    setTimer(120);
    const res = await sendotpregister(form.email);
    if (res) {
      toast.success("OTP sent to your email!");
      setOtpSent(true);
    }
    else {
      toast.error("Invalid Email!");
      setTimer(0);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-white shadow-md rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full">
              👤
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold">Join Campus Lost & Found</h2>
          <p className="text-center text-gray-500 mb-6">
            Create your account to start helping the campus community find their lost belongings
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} >

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                onChange={handleChange}
                value={form.name}
                name='name'
                type="text"
                placeholder="Enter your Name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                onChange={handleChange}
                value={form.email}
                name='email'
                type="email"
                placeholder="Enter your email address"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                onChange={handleChange}
                value={form.password}
                name='password'
                type="password"
                placeholder="Create secure password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Details</label>
              <input
                onChange={handleChange}
                value={form.contact}
                name='contact'
                type="text"
                placeholder="Enter Your Contact"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email verification</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={timer > 0}
              className={`w-full py-2 rounded-lg mb-4 ${timer > 0
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {timer > 0
                ? `Resend OTP in ${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")
                }`
                : otpSent
                  ? "Resend OTP"
                  : "Send OTP"}
            </button>
            <p className="text-xs text-gray-500 leading-5">
              By creating an account, you agree to our Terms of Service and Privacy Policy. Your information will only be used to facilitate lost and found connections within the campus community.
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/Login" className="text-black font-medium hover:underline">
              ← sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-center md:text-left">
              Campus Lost & Found
            </h1>
            <p className="text-gray-500 text-center md:text-left">
              Helping our campus community reconnect with lost belongings
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Campus Lost & Found System
            </h2>
            <p className="text-gray-500">
              Join thousands of students and staff using our platform to reunite
              with their lost belongings
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">🔍 Find Lost Items</p>
              <p className="text-sm text-gray-500">
                Search through reported found items and get reunited with your belongings
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">👥 Campus Community</p>
              <p className="text-sm text-gray-500">
                Connect with fellow students and staff to help each other find lost items
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">✅ Easy Reporting</p>
              <p className="text-sm text-gray-500">
                Quickly report lost or found items with photos and detailed descriptions
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">🛡 Secure Platform</p>
              <p className="text-sm text-gray-500">
                Your personal information is protected and only shared when necessary
              </p>
            </div>
          </div>
          <div className="bg-black text-white rounded-xl p-6 text-center">
            <p className="font-semibold text-lg">Ready to Get Started?</p>
            <p className="text-sm mt-1">
              Create your account today and help build Link more connected campus community
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
