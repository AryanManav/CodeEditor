import React, { useState, useRef, useEffect } from "react";
import { PYTHON_QUES } from "./pythonques";
import "./Python.css";
import Output from "../Output";
import Editor, { loader } from "@monaco-editor/react";

const Python = () => {
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
  const [editorValue, setEditorValue] = useState("");
  const [output, setOutput] = useState("");
  const editorRef = useRef(null);

  const toggleDropdown = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      setEditorValue(PYTHON_QUES[index].code);
      setOutput("");
    }
  };

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  return (
    <div className="python-container">
      <h1 className="python-title">Learn and Practice Python</h1>

      {PYTHON_QUES.map((item, index) => (
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

              <div className="editor-output-container">
                <div className="codeEdit">
                  <Editor
                    theme="darkGitHubTheme"
                    height="70vh"
                    width="100%"
                    language="python"
                    value={editorValue}
                    options={{
                      fontSize: 16,
                      lineHeight: 20,
                    }}
                    onMount={handleEditorDidMount}
                  />
                </div>

                <div className="output-section">
                  <Output
                    setoutput={setOutput}
                    output={output}
                    lang="python"
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

export default Python;
