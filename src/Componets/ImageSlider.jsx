// Stopwatch / Timer App
import React, { useState, useEffect } from 'react';

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold">Stopwatch: {seconds}s</h2>
      <div className="space-x-4 mt-4">
        <button onClick={() => setRunning(true)} className="px-4 py-2 bg-green-500 text-white rounded">Start</button>
        <button onClick={() => setRunning(false)} className="px-4 py-2 bg-yellow-500 text-white rounded">Stop</button>
        <button onClick={() => { setSeconds(0); setRunning(false); }} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
}

// Accordion Component (FAQ Toggle)
export function Accordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b p-4">
            <button
              className="w-full text-left text-lg font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple Image Slider
export function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img src={images[index]} alt="Slide" className="mx-auto h-64 w-auto object-cover rounded shadow" />
      <div className="mt-4 space-x-4">
        <button onClick={prevImage} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
        <button onClick={nextImage} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
    </div>
  );
}
