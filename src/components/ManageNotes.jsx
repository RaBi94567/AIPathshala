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
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Your Notes</h1>

        {loading ? (
          <p className="text-lg">Loading notes...</p>
        ) : notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                <p className="text-sm">{note.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg">No notes found for this address.</p>
        )}
      </div>

      <Footerz />
    </div>
  );
};

export default ManageNotes;
