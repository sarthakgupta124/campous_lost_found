"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react'
import getdataProfile from '@/actions/getdataProfile'
// import Deleteitem from '@/app/api/Deleteitem'
import deleteitem from '@/actions/Deleteitem'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { fetchData } from 'next-auth/client/_utils'

const Profile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [dataArray, setdataArray] = useState([]);
  const fetchdata = async () => {
    let data = await getdataProfile(session.user.email);
    if (data) setdataArray(data);
  };
  useEffect(() => {
    if (status === "authenticated") {

      fetchdata();
    }
    if (status === "unauthenticated") {
      toast.error("No User Found!")
      router.push("/Login");
    }
  }, [status, session]);
  const handledelete = async (e,url) => {
    const result = await deleteitem(e,url);
    console.log(result);
    fetchdata();
  }

  return (
    <div className='min-h-screen'>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-50">

        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome {session?.user?.name
              ? session.user.name.charAt(0).toUpperCase() +
              session.user.name.slice(1).toLowerCase()
              : "User"}, to Lost&amp;Found
          </h1>
          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg">
            Connecting communities to reunite lost items with their owners. Together, we make finding what matters most a little easier.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src="/handshake.jpg"
              alt="Hands holding"
              className="object-cover"
              width={500}
              height={350}
            />
          </div>
        </div>

      </section>

      <div className="px-4 py-6">
        {dataArray.length === 0 ? (
          <div className="text-center py-8 min-h-[30vh] w-full">
            <p className="text-gray-600 text-sm sm:text-base">
              You Have No Item Lost Or Found
            </p>
          </div>
        ) : (
          <><h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center p-10">
            Your Lost And Found Items
          </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {dataArray.map((e) => (
                <div
                  key={e.unid}
                  className="rounded-2xl overflow-hidden shadow-lg bg-gray-300 flex flex-col h-full"
                >
                  <img
                    className="w-full h-48 sm:h-56 md:h-60 object-cover"
                    src={e.imageUrl}
                    alt="Item"
                  />

                  <div className="p-4 space-y-3 flex flex-col flex-grow">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                        {e.title}
                      </h2>
                      <div className='flex flex-col gap-2'>
                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {e.category}
                        </span>
                        <button className='bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:cursor-pointer hover:bg-gray-400' onClick={() => handledelete(e.unid,e.imageUrl)}>Delete</button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{e.description}</p>

                    <div className="space-y-1 text-xs sm:text-sm text-gray-500">
                      <p className="flex items-center gap-2">
                        <span>📅</span> Lost:{" "}
                        {e.date ? new Date(e.date).toLocaleDateString() : "Unknown"}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📍</span> {e.place}
                      </p>
                    </div>
                    <div className="pt-2 border-t text-xs sm:text-sm mt-auto">
                      <p className="text-gray-500">Contact:</p>
                      <p className="font-medium text-gray-800">{e.name}</p>
                      <p className="flex items-center gap-2 text-gray-600">
                        📞 {e.contact}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600 break-words">
                        ✉️ {e.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
