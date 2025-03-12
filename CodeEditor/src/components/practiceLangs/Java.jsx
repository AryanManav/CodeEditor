import React, { useState, useRef, useEffect } from "react";
import { JAVA_QUES } from "./javaques";
import "./Java.css";
import Output from "../Output";
import Editor, { loader } from "@monaco-editor/react";

const Java = () => {
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("darkGitHubTheme", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "6a737d" },
          { token: "keyword", foreground: "c678dd" },
          { token: "number", foreground: "d19a66" },
          { token: "string", foreground: "98c379" },
          { token: "operator", foreground: "56b6c2" },
          { token: "identifier", foreground: "e5c07b" },
          { token: "delimiter", foreground: "abb2bf" },
          { token: "type", foreground: "e06c75" },
          { token: "function", foreground: "61afef" },
        ],
        colors: {
          "editor.foreground": "#abb2bf",
          "editor.background": "#1D1F21",
          "editorCursor.foreground": "#528bff",
          "editor.lineHighlightBackground": "#2c313c",
          "editorLineNumber.foreground": "#636d83",
          "editor.selectionBackground": "#3e4451",
          "editor.inactiveSelectionBackground": "#3e445199",
        },
      });
    });
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editorValue, setEditorValue] = useState(""); // Store selected code
  const [output, setOutput] = useState(""); // Store output
  const editorRef = useRef(null);

  // Toggle dropdown and update editor code
  const toggleDropdown = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      setEditorValue(JAVA_QUES[index].code);
      setOutput(""); // Reset output when switching questions
    }
  };

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  return (
    <div className="java-container">
      {/* Learn and Practice Java Title */}
      <h1 className="java-title">Learn and Practice Java</h1>

      {JAVA_QUES.map((item, index) => (
        <div key={index} className="question-container">
          <div
            className={`ques ${selectedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleDropdown(index)}
          >
            <span className="ques-number">Q{index + 1}.</span> {item.question}
          </div>

          {selectedIndex === index && (
            <>
              <div className="queState">{item.problem}</div>

              {/* Flexbox container for Editor and Output */}
              <div className="editor-output-container">
                <div className="codeEdit">
                  <Editor
                    theme="darkGitHubTheme"
                    height="70vh"
                    width="100%"
                    language="java"
                    value={editorValue}
                    options={{
                      fontSize: 16,
                      lineHeight: 20,
                    }}
                    onMount={handleEditorDidMount}
                  />
                </div>

                {/* Output Section */}
                <div className="output-section">
                  <Output
                    setoutput={setOutput}
                    output={output}
                    lang="java"
                    editorRef={editorRef}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Java;
