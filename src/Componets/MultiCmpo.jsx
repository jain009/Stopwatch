import React, { useState, useEffect } from 'react';

export default function MultiCmpo() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [liked, setLiked] = useState(false);

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape'];

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-100">
      {/* 1. Disable Button After Click */}
      <div>
        <button
          className={`px-4 py-2 rounded ${isDisabled ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
          onClick={() => setIsDisabled(true)}
          disabled={isDisabled}
        >
          {isDisabled ? 'Clicked!' : 'Click Me'}
        </button>
      </div>

      {/* 2. Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded shadow"
        >
          Scroll to Top
        </button>
      )}

      {/* 3. Search Filter List */}
      <div>
        <input
          type="text"
          placeholder="Search fruits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full max-w-md"
        />
        <ul className="mt-4 list-disc list-inside">
          {filteredItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 4. Like Button */}
      <div>
        <button
          onClick={() => setLiked(!liked)}
          className={`px-4 py-2 rounded ${liked ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
        >
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </div>
  );
}
