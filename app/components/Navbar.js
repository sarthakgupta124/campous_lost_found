"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []); //conditional and hydration rendering fix.


  const [isdropdownopen, setisdropdownopen] = useState(false)
  const [ismobilemenuopen, setismobilemenuopen] = useState(false)
  const router = useRouter();
  const { data: session, status } = useSession();
  const handlefind = () => {
    if (status === 'authenticated') {
      router.push("/Find");
    }
    if (status === 'unauthenticated') {
      toast.error("Please Login To Enter!")
      router.push("/Login")
    }
  }
  const handleregisteritem = () => {
    if (status === 'authenticated') {
      router.push("/ItemRegister");
    }
    if (status === "unauthenticated") {
      toast.error("Please Login To Register Item!")
      router.push("/Login")
    }

  }

  useEffect(() => {
    if (status === 'unauthenticated') {

    }
  }, [status, router]);

  if (!mounted) return null; //hydration or condition rendering fix.
  return (
    <nav className="bg-white min-h-[10vh] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/lost_found.jpg"
            className="h-8"
            alt="Lost & Found"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lost & Found
          </span>
        </Link>


        <button
          onClick={() => setismobilemenuopen(!ismobilemenuopen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-multi-level"
          aria-expanded={ismobilemenuopen}
        >
          <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {ismobilemenuopen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>


        <div
          className={`${ismobilemenuopen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
  bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white 
  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:ml-auto">


            <li>
              <Link
                href="/"
                className="block py-2 px-4 rounded-md transition-colors duration-200 
                text-gray-900 bg-blue-100 hover:bg-blue-200 md:hover:bg-blue-100 
                md:border-0 md:text-blue-700 dark:text-white dark:bg-gray-700 
                dark:hover:bg-gray-600 md:dark:hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleregisteritem}
                className="block py-2 px-4 rounded-md transition-colors duration-200 
                text-gray-900 bg-green-100 hover:bg-green-200 md:hover:bg-green-100 
                md:border-0 md:text-green-700 dark:text-white dark:bg-gray-700 
                dark:hover:bg-gray-600 md:dark:hover:bg-gray-700"
              >
                Add Item
              </button>
            </li>
            <li>
              <button
                onClick={handlefind}
                className="block py-2 px-4 rounded-md transition-colors duration-200 
                text-gray-900 bg-yellow-100 hover:bg-yellow-200 md:hover:bg-yellow-100 
                md:border-0 md:text-yellow-700 dark:text-white dark:bg-gray-700 
                dark:hover:bg-gray-600 md:dark:hover:bg-gray-700"
              >
                Find Belongings
              </button>
            </li>

            {status === "unauthenticated" && (
              <li>
                <Link
                  href="/Login"
                  className="block py-2 px-4 rounded-md transition-colors duration-200 
                text-gray-900 bg-yellow-100 hover:bg-yellow-200 md:hover:bg-yellow-100 
                md:border-0 md:text-yellow-700 dark:text-white dark:bg-gray-700 
                dark:hover:bg-gray-600 md:dark:hover:bg-gray-700"
                >
                  Login
                </Link>
              </li>
            )}

            {status === "authenticated" && (
              <li className="relative">
                <button
                  onClick={() => setisdropdownopen(!isdropdownopen)}
                  onBlur={() => {
                    setTimeout(() => {
                      setisdropdownopen(false);
                    }, 1000);
                  }}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md transition-colors duration-200 
                  text-gray-900 bg-purple-100 hover:bg-purple-200 md:hover:bg-purple-100 
                  md:border-0 md:text-purple-700 md:w-auto dark:text-white dark:bg-gray-700 
                  dark:hover:bg-gray-600 md:dark:hover:bg-gray-700"
                >
                  Setting
                  <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isdropdownopen && (
                  <div
                    id="dropdownNavbar"
                    className="absolute top-full left-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 
                    rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link
                          href="/Profile"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                    <div className="py-1">
                      <button
                        onClick={signOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                        dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
