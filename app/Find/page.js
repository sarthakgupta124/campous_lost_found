"use client";
import { useState, useEffect } from "react";
import getdata from "@/actions/getdata";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
export default function Find() {
  const { data: session, status } = useSession();
  const [category, setCategory] = useState("All Categories");
  const [open, setOpen] = useState(false);
  const [dataArray, setdataArray] = useState([]);
  const router = useRouter();

  const categories = [
    "All Categories",
    "Bags",
    "Clothing",
    "Electronics",
    "Jewelry",
    "Keys",
    "Personal Items",
  ];
  useEffect(() => {
    if (status === 'unauthenticated') {
      toast.error("Please Login to Find!")
      router.push("/Login");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchdata = async () => {

      let data = await getdata(category);
      if (data) setdataArray(data);
    };
    fetchdata();
  }, [category]);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-10 md:px-16 bg-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Lost &amp; Found
        </h1>
        <p className="text-gray-500 mt-2 text-center text-sm sm:text-base">
          Help reunite people with their lost belongings
        </p>

        
        <div className="flex mt-6 space-x-2">
          
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center bg-gray-100 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>

              <span className="truncate max-w-[100px] sm:max-w-none">
                {category}
              </span>

              
              <svg
                className="w-4 h-4 ml-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>


            {open && (
              <div className="absolute mt-2 w-40 sm:w-44 bg-white shadow-lg rounded-lg border z-10">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${category === cat
                      ? "text-blue-600 font-medium"
                      : "text-gray-700"
                      }`}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="px-4 py-6">
        {dataArray.length === 0 ? (
          <div className="text-center py-8 min-h-[30vh] w-full">
            <p className="text-gray-600 min-h-[30vh] text-sm sm:text-base">
              No Item Lost In Selected Category
            </p>
          </div>
        ) : (
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
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {e.category}
                    </span>
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
        )}
      </div>

    </>
  );
}
