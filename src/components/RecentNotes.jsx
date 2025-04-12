import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecentNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // api to get the listings
    fetch("http://localhost/ai_path/getall.php")
      .then((response) => response.json())
      .then((result) => {
        // Sort in descending order by date_created
        const sortedNotes = result.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        );
        setNotes(sortedNotes);
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
    <div className="p-5 ">
      <h1 className="text-3xl font-bold text-white text-center mb-5">Recently Published</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Link
            key={note.id}
            to={`/details?id=${note.id}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={`http://localhost/ai_path/${note.thumb_path}`}
              alt={note.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{note.title}</h2>
            <p className="text-gray-600 text-sm truncate">{note.description}</p>
            <div className="text-right text-gray-500 text-xs mt-2">
              <p>Published on: {new Date(note.date_created).toLocaleDateString()}</p>
              <p>Type: {note.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
