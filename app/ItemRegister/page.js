"use client";
import React, { useState } from "react";
import itemregister from "../../actions/itemregister";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const ItemForm = () => {
  const fileInputRef = useRef(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [savebutton, setsavebutton] = useState(true)
  useEffect(() => {
    if (status === 'unauthenticated') {
      toast.error("Login to add item!")
      router.push("/Login");
    }
  }, [status, router]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    place: "",
    shareContact: false,
    imageUrl: ""
  });

  const [url, setUrl] = useState("");
  const [fileimage, setfileimage] = useState("")
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("⚠️ No file selected")
      return;
    }
    if (file.size > 307200) {
      toast.error("❌ Image size exceeds 300 KB. Please upload a smaller image.");
      e.target.value = ""; // reset input
      return;
    }
    setfileimage(file);
    toast.success("File uploaded Register Please!")
    setsavebutton(false)
  };







  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsavebutton(true)
    let data = "";
    if (fileimage) {
      console.log("Uploading file:", fileimage.name, fileimage.size);
      const imgdata = new FormData();
      imgdata.append("file", fileimage);

      const res = await fetch("/api/upload", { method: "POST", body: imgdata });
      data = await res.json();
      console.log("Upload response:", data);
    }


    const result = await itemregister(form, session.user.email, session.user.name, session.user.contact, data.url);
    setForm({
      title: "",
      category: "",
      description: "",
      date: "",
      place: "",
      imageUrl: "",
      shareContact: false
    });
    setUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.success("Added Successfully");
    setsavebutton(false)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-xl">
            📦
          </div>
          <h2 className="text-xl font-semibold mt-3">Register Lost Item</h2>
          <p className="text-gray-500 text-sm text-center mt-1">
            Fill in the details to register your lost item
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          <div>
            <label className="block font-medium mb-1">Item Name</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter item name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a category</option>
              <option value="Bags">Bags</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Keys">Keys</option>
              <option value="Personal Item">Personal Item</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter item description"
              rows="3"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Lost Place</label>
            <input
              type="text"
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Enter Lost place"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4 font-light">Drop Image Of Your Item (Max Size 300KB)
            <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-black transition">
              {/* Upload icon */}
              <svg
                className="w-8 h-8 mb-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 8v-4a4 4 0 00-4-4H7m6 8l4-4m0 0l4 4m-4-4v4"
                />
              </svg>

              {/* Show either file name or default instruction */}
              <span className="text-gray-500 text-sm">
                {url ? url.split("/").pop() : "Click to upload or drag & drop an image"}
              </span>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleUpload}
                className="hidden"
              />
            </label>
          </div>


          <p className="text-xs text-gray-500">
            By registering an item, you agree that your information will only be
            used to facilitate lost and found connections within the community.
          </p>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="shareContact"
              checked={form.shareContact}
              onChange={handleChange}
              required
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              I allow sharing my contact details
            </label>
          </div>
          <button
            disabled={savebutton}
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Register Item
          </button>
        </form>
      </div>
    </div >
  );
};

export default ItemForm;

