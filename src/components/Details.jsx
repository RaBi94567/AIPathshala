import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footerz from "./Footer";
import Sponsored from "./Sponsored";
import RandomNotes from "./RandomNotes";

export default function Details() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost/ai_path/getbyid.php?id=${id}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-900 text-white">
        <div className="animate-pulse text-xl font-semibold">Loading Content...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-100 text-red-700 text-xl font-semibold">
        Invalid ID or Content Not Found.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-7xl">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          {data.title}
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src={`http://localhost/ai_path/${data.thumb_path}`}
            alt={data.title}
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

 
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {data.description}
        </p>

   
        <div className="border rounded-lg overflow-hidden mb-8">
          <iframe
            src={`http://localhost/ai_path/${data.path}`}
            title="PDF Viewer"
            className="w-full h-[600px]"
          />
        </div>


        <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
          <p><b>Published:</b> {data.date_created}</p>
          <p><b>By:</b> {data.address}</p>
          <p><b>Type:</b> {data.type}</p>
        </div>
      </div>

 
      <div className="bg-white p-6 mt-10 rounded-2xl shadow-lg w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments (3)</h2>
        <div className="space-y-4">
          <div className="border p-3 rounded-lg">
            <p className="font-semibold">0x401418f6420ac78111e51527237392d009ed5d30</p>
            <p>Very helpful notes. Thanks for sharing!</p>
          </div>
          <div className="border p-3 rounded-lg">
            <p className="font-semibold">0x401418f6420aC7811ewe34eW27237392d009ed5t6</p>
            <p>Can you upload notes on AI basics too?</p>
          </div>
          <div className="border p-3 rounded-lg">
            <p className="font-semibold">0x401418f6420ac78gT1e515rRT5rty9gfdfgd30hff</p>
            <p>PDF quality is awesome. Appreciate your efforts!</p>
          </div>

          <div className="border p-3 rounded-lg">
          <input
          placeholder="Enter comment here..."
          className="w-full text-red-600 p-6 rounded border-1">
          </input>
          <button
          className="mt-5 w-full p-2 bg-blue-600 text-white font-bold">
            Add Comment
          </button>
          </div>
        </div>
      </div>

      <Sponsored/>
      <br/>

      <RandomNotes />
      <Footerz />
    </div>
  );
}
