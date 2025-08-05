import React, { useEffect, useState } from "react";

export default function Stopwatch() {
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
    <div className=" -me-px flex  min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 m-200">
     
      <div className="bg-white rounded-2xl shadow-2xl border-4 border-blue-400 px-10 py-12 w-[90%] max-w-md text-center">
        

        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          ⏱ Stopwatch
        </h2>

     
        <div className="flex justify-center mb-8">
          <div className="px-10 py-6 bg-blue-100 border-2 border-blue-500 text-blue-700 text-5xl font-mono rounded-lg shadow-inner">
            {seconds}s
          </div>
        </div>

 
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setRunning(true)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
          >
            ▶ Start
          </button>
          <button
            onClick={() => setRunning(false)}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition duration-300"
          >
            ⏸ Stop
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setSeconds(0);
            }}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
          >
            🔄 Reset
          </button>
        </div>

      </div>
    </div>
  );
}
