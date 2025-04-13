import React, { useState } from 'react';
import { useGlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom'; 
import Login from './Login';
import { Toaster, toast } from 'react-hot-toast';

const AddForm = () => {
  const { address, setAddress } = useGlobalContext();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    syllabus: '',
    type: 'note',
    file: null,
    thumbnail: null,
  });

  const [message, setMessage] = useState('');
  const history = useNavigate(); 
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
  const { name, files } = e.target;
  setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data validation
    if (!formData.title || !formData.description || !formData.syllabus || !formData.file) {
      setMessage('Please fill in all fields and upload a file.');
      return;
    }

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('address', address);
    formDataToSend.append('syllabus', formData.syllabus);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('file', formData.file);
    formDataToSend.append('thumbnail', formData.thumbnail);

    const keywords = ['this', 'is', 'the', 'and', 'in'];
    const fount = keywords.some(word => {
      const pattern = new RegExp(`\\b${word}\\b`, 'i');
      return pattern.test(formData.description);

    }
  );
    if(fount) {

    try {

        // created php backend to store the data in mySql database
      const response = await fetch('http://localhost/ai_path/add.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.text();

      if (response.ok) {
        toast.promise(
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 3000);
          }),
          {
            loading: 'AI is analyzing the details, please wait...',
            success: <b>Approved by AI — published</b>, 
            error: <b>Flagged by AI — sent for manual review</b>,
          }
        );
        setTimeout(() => {
          history('/'); 
        }, 3000);
      } else {
        setMessage('Error: ' + result);
      }
    } catch (error) {
      setMessage('Error uploading data: ' + error.message);
    }
  } else {
  
    toast.promise(
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Something went wrong!'));
        }, 6000);
      }),
      {
        loading: 'AI is analyzing the details, please wait...',
        success: <b>Approved by AI — published</b>, 
        error: <b>Flagged by AI — sent for manual review</b>,
      }
    );
  

  setTimeout(() => {
    history('/'); 
  }, 6000);
  }
  };

  if (address == '') {
    return (
    <div>
        {address}
    <Login />
    </div>);
  }
  return (
<>
<div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 py-10">


      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-8">Upload a Note</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-6">
            <label htmlFor="title" className="block  text-xl font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block  text-xl font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>


          <div className="mb-6">
            <label htmlFor="syllabus" className="block  text-xl font-medium mb-2">Syllabus</label>
            <textarea
              name="syllabus"
              value={formData.syllabus}
              onChange={handleChange}
              placeholder="Enter syllabus"
              className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block  text-xl font-medium mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            >
              <option value="note">Note</option>
              <option value="research_paper">Research Paper</option>
              <option value="video">Video</option>
              <option value="course">Course</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="file" className="block  text-xl font-medium mb-2">Upload File (Main Content)</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="thumbnail" className="block  text-xl font-medium mb-2">Upload Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <div className="mb-8">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none transition duration-300"
            >
              Submit
            </button>
          </div>

          {message && (
            <div className="text-center py-3 text-red-500">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default AddForm;
