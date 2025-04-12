import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import Login from "./Login";
import Footerz from "./Footer";

const ManageNotes = () => {
  const { address } = useGlobalContext();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (address) {
      fetch("http://localhost/ai_path/getall.php")
        .then((response) => response.json())
        .then((data) => {
          const filteredNotes = data.filter((note) => note.address === address);
          setNotes(filteredNotes);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching notes:", error);
          setLoading(false);
        });
    }
  }, [address]);

  if (address === '') {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-800 to-blue-600">
        <Login />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Notes</h1>

        {loading ? (
          <p className="text-lg">Loading notes...</p>
        ) : notes.length > 0 ? (
          <ul className="space-y-6">
            {notes.map((note, index) => (
              <li key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
                <img
                  src={`http://localhost/ai_path/${note.thumb_path}`}
                  alt={note.title}
                  className="rounded-lg shadow-lg w-full md:w-48 h-auto object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-black mb-2">{note.title}</h2>
                  <p className="text-sm text-black">
  {note.description.length > 300
    ? `${note.description.substring(0, 300)}...`
    : note.description}
</p>

                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg">No notes found for this address.</p>
        )}
      </div>

      <Footerz />
    </div>
  );
};

export default ManageNotes;
