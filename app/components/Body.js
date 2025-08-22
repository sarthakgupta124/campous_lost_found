"use client"
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Body = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const getstart = () => {
    if (status === "unauthenticated") {
      toast.error("Login To Start")
      router.push("/Login")
    }
    if (status === "authenticated") {

      router.push("/Find")

    }
  }
  const handlefindbelongings = () => {
    if (status === 'authenticated') {
      router.push("/Find");
    }
    if (status === "unauthenticated") {
      toast.error("Please Login To Enter!")
      router.push("/Login")
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Never Lose Hope.<br />
          Always Find Whats Lost.
        </h1>


        <p className="text-gray-500 max-w-2xl mb-8">
          Connect with your college community to report lost items and help others find what they ve lost.
          Simple, fast, and designed for students by students.
        </p>


        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button onClick={getstart} className="bg-black text-white px-12 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-800 transition">
            Get Start
          </button>
          <button onClick={handlefindbelongings} className="bg-black text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-800 transition">
            Find Belongings
          </button>
        </div>


        <p className="text-gray-500 text-sm">
          Join over <span className="font-bold">2,500+</span> students already using our platform
        </p>
      </div>




      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Simple Process, Great Results
          </h2>
          <p className="text-gray-500 mt-2">
            Four easy steps to reunite you with your lost belongings
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border relative">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 006 5.25v13.5A2.25 2.25 0 008.25 21h7.5A2.25 2.25 0 0018 18.75V14.25m-9-6h6m-6 3h6" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Step 01</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">Report or Search</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Post a lost item with details and photos, or browse found items from other students.
              </p>
              <span className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300"></span>
            </div>


            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border relative">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Step 02</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">Get Matched</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Our system automatically matches lost and found items based on descriptions and locations.
              </p>
              <span className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300"></span>
            </div>


            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border relative">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a3.375 3.375 0 106.75 0 3.375 3.375 0 00-6.75 0zm-2.1 0a5.475 5.475 0 0110.95 0c0 1.517-.602 2.887-1.58 3.888l2.89 2.888a.75.75 0 11-1.06 1.06l-2.89-2.888A5.475 5.475 0 016.525 12z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Step 03</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">Connect Safely</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Message the finder or reporter through our secure platform to arrange pickup.
              </p>
              <span className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300"></span>
            </div>


            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Step 04</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">Item Returned</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Meet safely on campus and confirm the return to close the case successfully.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>


  )
}

export default Body
