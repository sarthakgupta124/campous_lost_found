"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import login from '../api/auth/[...nextauth]/login'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Login = () => {
  const router = useRouter();
  const [form, setform] = useState({ email: "", password: "" })
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const result = await login(form);
    if (result.error) {
      toast.error("Invalid email or password")
    }
    else {
      toast.success("login Successful")
      setform({ email: "", password: "" });
      router.push('/')
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full">
              🔍
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-6">
            Sign in to access the campus lost and found system
          </p>

          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                onChange={handlechange}
                name='email'
                value={form.email}
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={handlechange}
                name='password'
                value={form.password}
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <Link href="/Forgetpass" className="text-sm text-gray-600 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/Register" className="text-black font-medium hover:underline">
              Sign up here
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
                Search through reported found items and get reunited with your
                belongings
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">👥 Campus Community</p>
              <p className="text-sm text-gray-500">
                Connect with fellow students and staff to help each other find
                lost items
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">✅ Easy Reporting</p>
              <p className="text-sm text-gray-500">
                Quickly report lost or found items with photos and detailed
                descriptions
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">🛡 Secure Platform</p>
              <p className="text-sm text-gray-500">
                Your personal information is protected and only shared when
                necessary
              </p>
            </div>
          </div>

          <div className="bg-black text-white rounded-xl p-6 text-center">
            <p className="font-semibold text-lg">Ready to Get Started?</p>
            <p className="text-sm mt-1">
              Create your account today and help build a more connected campus
              community
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
