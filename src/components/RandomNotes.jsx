import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RandomNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // php api backend to get the notes
    fetch("http://localhost/ai_path/getall.php")
      .then((response) => response.json())
      .then((result) => {
        // Shuffle the notes array and pick any 3 random notes
        const shuffledNotes = result.sort(() => 0.5 - Math.random());
        setNotes(shuffledNotes.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-5">Loading...</p>;
  if (notes.length === 0) return <p className="text-center p-5">No notes available.</p>;

  return (
    <div className="p-5 min-h-auto">
      <h1 className="text-3xl text-white font-bold text-center mb-5">Recommended for You</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Link
            key={note.id}
            to={`/details?id=${note.id}`}
            className="bg-white/10 shadow-lg text-white p-4 rounded-lg shadow-md hover:shadow-lg "
          >
            <img
              src={`http://localhost/ai_path/${note.thumb_path}`}
              alt={note.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{note.title}</h2>
            <p className="text-gray-100 text-sm truncate">{note.description}</p>
            <div className="text-right text-gray-100 text-xs mt-2">
              <p>Published on: {new Date(note.date_created).toLocaleDateString()}</p>
              <p>Type: {note.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
