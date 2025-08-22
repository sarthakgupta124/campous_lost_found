import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white  shadow-sm dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:pb-4 pt-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
              <img src="/lost_found.jpg" className="h-10" alt="Lost&Found" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lost & Found</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/About" className="hover:underline me-4 md:me-6 hover:text-amber-300">About</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">Lost & Found™</Link>. All Rights Reserved.</span>
        </div>
      </footer>



    </div>
  )
}

export default Footer
