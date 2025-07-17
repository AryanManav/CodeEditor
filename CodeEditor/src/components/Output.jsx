import React, { useState } from 'react';

const Output = ({ editorRef, lang, output, setoutput }) => {
  const [wrong, setwrong] = useState(false);

  const onSubmit = async () => {
    try {
      if (!editorRef.current) {
        console.error("Editor reference is null!");
        setoutput("Editor is not loaded. Please try again.");
        setwrong(true);
        return;
      }

      const code = editorRef.current.getValue();
      const lan = lang;

      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, lan }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.output) {
        setwrong(false);
        setoutput(result.output.replace(/\\n/g, '\n'));
      } else {
        setwrong(true);
        setoutput(result.error || "Unknown error occurred.");
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setwrong(true);
      setoutput("Error connecting to the server. Please check your backend.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border rounded-lg shadow-md p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-purple-700">Output</h2>
        <button
          onClick={onSubmit}
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-1.5 rounded shadow transition"
        >
          Run Code
        </button>
      </div>

      {/* Output Display */}
      <div
        className={`flex-1 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-y-auto border ${
          wrong ? "bg-red-50 border-red-400 text-red-700" : "bg-gray-100 border-gray-300 text-gray-800"
        }`}
      >
        {output ? output : "Click on 'Run Code' to see output here."}
      </div>
    </div>
  );
};

export default Output;
