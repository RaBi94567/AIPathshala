import React, { useState } from 'react';

const BrowserInterface = () => {
  const [query, setQuery] = useState('');
  const [fileType, setFileType] = useState('all');
  const [loading, setLoading] = useState(false);

  // Handle query input change
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle dropdown selection
  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
  };

  // Open a research tool in a new popup
  const openPopup = (url) => {
    const popup = window.open(url, 'AIPathshala Research', 'width=1200,height=600,scrollbars=yes,resizable=yes');
    if (!popup) {
      alert('Popup blocked! Please allow popups for this site.');
    }
  };

  // Generate search URL based on user input
  const generateSearchUrl = () => {
    if (!query) return; // Don't generate URL if query is empty
    setLoading(true);
    let url = `https://www.google.com/search?q=${query}`;
    
    if (fileType !== 'all') {
      url += `+filetype%3A${fileType}`;
    }

    openPopup(url); // Open the search results in a popup
    setLoading(false); // Stop loading
  };

  // Handle advanced search (e.g., images, news, etc.)
  const handleAdvancedSearch = (searchType) => {
    let url;
    switch (searchType) {
      case 'images':
        url = `https://www.google.com/search?hl=en&tbm=isch&q=${query}`;
        break;
      case 'news':
        url = `https://news.google.com/search?q=${query}`;
        break;
      case 'books':
        url = `https://books.google.com/books?q=${query}`;
        break;
      case 'youtube':
        url = `https://www.youtube.com/results?search_query=${query}`;
        break;
      case 'maps':
        url = `https://www.google.com/maps/search/${query}`;
        break;
      default:
        url = `https://www.google.com/search?q=${query}`;
    }
    
    openPopup(url); // Open the selected search type in a popup
  };

  return (
    <>
    
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg px-6 pb-20">
       
      <h1
      className='m-6 text-2xl font-bold'>
        InsightHub
    </h1>
        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 w-12 h-12"></div>
          </div>
        )}

        {/* Address Bar */}
        <div className="flex items-center mb-4 border-b pb-4">
          <input
            type="text"
            placeholder="Enter your search query..."
            value={query}
            onChange={handleQueryChange}
            className="w-3/4 p-2 border rounded-l-md focus:outline-none"
          />
          <select
            value={fileType}
            onChange={handleFileTypeChange}
            className="p-2 border rounded-r-md ml-2 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="pdf">PDF</option>
            <option value="doc">Docx</option>
            <option value="ppt">Presentation</option>
            <option value="xls">Database</option>
            <option value="odt">OpenDocument</option>
          </select>
          <button
            onClick={generateSearchUrl}
            className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Advanced Search */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800">Advanced Search</h4>
          <div className="mt-2 flex space-x-3">
            <button
              onClick={() => handleAdvancedSearch('images')}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
            >
              Images
            </button>
            <button
              onClick={() => handleAdvancedSearch('news')}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              News
            </button>
            <button
              onClick={() => handleAdvancedSearch('books')}
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-300"
            >
              Books
            </button>
            <button
              onClick={() => handleAdvancedSearch('youtube')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
            >
              YouTube
            </button>
            <button
              onClick={() => handleAdvancedSearch('maps')}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
            >
              Maps
            </button>
          </div>
        </div>

        {/* Research Tools */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800">Research Tools</h4>
          <div className="mt-2 flex space-x-3">
            <button
              onClick={() => openPopup(`https://scholar.google.com/scholar?q=${query}`)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Google Scholar
            </button>
            <button
              onClick={() => openPopup(`https://www.microsoft.com/en-us/research/search/?query=${query}`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Microsoft Research
            </button>
            <button
              onClick={() => openPopup(`https://pubmed.ncbi.nlm.nih.gov/?term=${query}`)}
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              PubMed
            </button>
            <button
              onClick={() => openPopup(`https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=${query}`)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
            >
              IEEE Xplore
            </button>
            <button
              onClick={() => openPopup(`https://arxiv.org/search/?query=${query}`)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
            >
              ArXiv
            </button>
            <button
              onClick={() => openPopup(`https://www.sciencedirect.com/search?qs=${query}`)}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300"
            >
              Elsevier ScienceDirect
            </button>
            <button
              onClick={() => openPopup(`https://link.springer.com/search?query=${query}`)}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              SpringerLink
            </button>
            <button
              onClick={() => openPopup(`https://en.wikipedia.org/wiki/${query}`)}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
            >
              Wikipedia
            </button>
            <button
              onClick={() => openPopup(`https://www.reddit.com/r/search/?q=${query}`)}
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-300"
            >
              Reddit
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BrowserInterface;
