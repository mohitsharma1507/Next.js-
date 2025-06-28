"use client";

import { useEffect, useState } from "react";

const RandomJokes = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showJokes, setShowJokes] = useState(true);
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setRandomJokes(data);
    setShowJokes(true);
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-pink-100 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">
        Random Joke Generator
      </h2>
      <p className="text-lg text-gray-800 mb-4">{randomJokes.setup}</p>

      {showJokes ? (
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded mb-4 transition"
          onClick={() => setShowJokes(false)}
        >
          Reveal Punchline
        </button>
      ) : (
        <div className="mb-4">
          <h1 className="text-xl text-gray-900 font-medium mb-2">
            {randomJokes.punchline}
          </h1>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
            onClick={() => setShowJokes(true)}
          >
            Hide Punchline
          </button>
        </div>
      )}

      <button
        onClick={fetchRandomJokes}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
      >
        Next Joke
      </button>
    </div>
  );
};

export default RandomJokes;
