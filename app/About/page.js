import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen'>
      <div className="bg-[#eaf0fe] flex items-center justify-center p-6">
        <div className="max-w-5xl mt-10 w-full text-center space-y-8">
          
          <div>
            <h1 className="text-3xl font-semibold">About Lost &amp; Found</h1>
            <p className="text-gray-600 mt-2">
              Connecting communities through technology to reunite people with their lost belongings
            </p>
          </div>
          
          <div className="bg-white rounded-xl max-w-5xl w-full shadow-md overflow-hidden">
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-left text-white">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.305.536 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium">Meet the Creator</span>
              </div>
              <p className="text-sm mt-1">
                The person behind this innovative platform
              </p>
            </div>

            
            <div className="flex flex-col  md:flex-row items-center md:items-start gap-12 p-6">
              <div className="flex-1 text-left">
                <h2 className="text-lg font-semibold">Sarthak Gupta</h2>
                <p className="text-gray-600 mt-2">
                  A passionate developer dedicated to creating meaningful solutions that help communities.
                  With expertise in modern web technologies, I built this Lost &amp; Found platform to address a
                  real-world problem and make a positive impact on society.
                </p>

                
                <div className="flex gap-2 mt-4 flex-wrap">
                  
                  <a href="https://www.linkedin.com/in/sarthak-gupta-33268b325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank' className="px-3 py-1 border rounded-lg flex items-center gap-1 text-sm">
                    <span>💼</span> LinkedIn
                  </a>
                  <a href="mailto:sarthakgupta9259@gmail.com" target='_blank' className="px-3 py-1 border rounded-lg flex items-center gap-1 text-sm">
                    <span>✉️</span> Contact
                  </a>
                </div>
              </div>

              
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center shadow">
                <img className="h-28 w-28 text-gray-400 rounded-full object-cover" src="/profile.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eaf0fe]  flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-white rounded-xl shadow-md p-8">
          
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.341A8 8 0 105.59 15.34L12 22l7.428-6.659z" />
            </svg>
            <h2 className="text-lg font-semibold">Project Overview</h2>
          </div>

          <p className="text-gray-600 mb-4">Building a solution for a common problem</p>

          
          <p className="text-gray-700 mb-8">
            The Lost &amp; Found website is a comprehensive platform designed to help people reconnect
            with their lost belongings. Whether its a wallet, keys, phone, or any other valuable item,
            our platform provides a centralized place where finders and seekers can connect.
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
              <h3 className="font-semibold">Smart Search</h3>
              <p className="text-sm text-gray-600 mt-1">
                Advanced search functionality to help users find their lost items quickly
              </p>
            </div>

            
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m4-4a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <h3 className="font-semibold">Community Driven</h3>
              <p className="text-sm text-gray-600 mt-1">
                Connect people who have lost items with those who have found them
              </p>
            </div>

           
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-4a4 4 0 00-4-4H7a4 4 0 00-4 4v4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7v4a2 2 0 01-2 2h-2" />
              </svg>
              <h3 className="font-semibold">Secure Platform</h3>
              <p className="text-sm text-gray-600 mt-1">
                Built with authentication and security best practices in mind
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eaf0fe]  flex flex-col items-center p-6 gap-6">

       
        <div className="max-w-5xl w-full bg-white rounded-xl shadow-md p-8">
        
          <h2 className="text-lg font-semibold">Technology Stack</h2>
          <p className="text-gray-600 mb-6">Modern technologies powering the platform</p>

         
          <p className="font-semibold">JavaScript</p>
          <hr className="my-4" />

          
          <p className="font-medium mb-2">Why These Technologies?</p>
          <ul className="space-y-1 text-gray-700">
            <li><span className="font-semibold text-blue-600">• Next.js</span> - For server-side rendering and optimal performance</li>
            <li><span className="font-semibold text-blue-600">• JavaScript</span> - Core programming language powering the app</li>
            <li><span className="font-semibold text-blue-600">• Tailwind CSS</span> - For rapid and responsive UI development</li>
            <li><span className="font-semibold text-blue-600">• Node.js</span> - JavaScript runtime for backend operations</li>
            <li><span className="font-semibold text-blue-600">• MongoDB</span> - Flexible  database for storing listings and user data</li>
            <li><span className="font-semibold text-blue-600">• Cloudinary</span> - For efficient image and media storage, optimization, and delivery</li>
            <li><span className="font-semibold text-blue-600">• NextAuth</span> - Secure authentication system</li>
            <li><span className="font-semibold text-blue-600">• Nodemailer</span> - Email service for OTP Verification</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

