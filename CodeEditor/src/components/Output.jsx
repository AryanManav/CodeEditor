import React, { useState } from 'react'
import './Output.css'

const Output = ({ editorRef, lang, output, setoutput }) => {
  const [wrong, setwrong] = useState(false)

  const onSubmit = async () => {
    try {
      if (!editorRef.current) {
        console.error("Editor reference is null!");
        setoutput("Editor is not loaded. Please try again.");
        setwrong(true);
        return;
      }

      const code = editorRef.current.getValue();
      let lan = lang;

      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code, lan })
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
    <>
      <div className="output__title">Output</div>
      <div className="run">
        <button onClick={onSubmit} className='btn run'>Run Code</button>
      </div>
      <div className="output">
        <div className={wrong ? "shade output__content red" : "shade output__content"}>
          <pre>{output ? output : "Click on 'Run Code' to see Output here"}</pre>
        </div>
      </div>
    </>
  );
}

export default Output;
