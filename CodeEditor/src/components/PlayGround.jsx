import './PlayGround.css';
import { useState, useRef, useEffect } from 'react';
import Output from './Output';
import DropDown from './DropDown';
import { LANGUAGE_CODE } from '../lang';
import Editor, { loader } from '@monaco-editor/react';

function PlayGround() {
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('lightCustomTheme', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'comment', foreground: '6a737d' },
          { token: 'keyword', foreground: '7e22ce' },
          { token: 'number', foreground: 'b45309' },
          { token: 'string', foreground: '15803d' },
          { token: 'operator', foreground: '0f766e' },
          { token: 'function', foreground: '7e22ce' },
        ],
        colors: {
          'editor.foreground': '#1f2937',
          'editor.background': '#f9fafb',
          'editorCursor.foreground': '#7e22ce',
          'editor.lineHighlightBackground': '#f3f4f6',
          'editorLineNumber.foreground': '#9ca3af',
          'editor.selectionBackground': '#ddd6fe',
          'editor.inactiveSelectionBackground': '#ddd6feaa',
        },
      });
    });
  }, []);

  const [languages, setLanguage] = useState("java");
  const [output, setoutput] = useState("");
  const [value, setValue] = useState(LANGUAGE_CODE["java"]);
  const editorRef = useRef(null);

  const handleClick = (lang) => {
    setLanguage(lang);
    setValue(LANGUAGE_CODE[lang]);
    setoutput("");
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <div className="border-b border-gray-300 px-4 py-2 bg-purple-50">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-600">Code Playground</h1>
          <div className="hidden md:block">
            <DropDown lang={languages} handleClick={handleClick} />
          </div>
        </div>
      </div>

      {/* Centered title */}
      <div className="text-center py-2">
        <p className="text-xl font-semibold text-purple-700">
          Online {languages.toUpperCase()} Compiler
        </p>
      </div>

      {/* Editor + Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-112px)]">
        <div className="border-r border-gray-300">
          <Editor
            theme="lightCustomTheme"
            height="100%"
            language={languages}
            value={value}
            options={{
              fontSize: 16,
              lineHeight: 24,
              minimap: { enabled: false },
              fontFamily: 'Fira Code, monospace',
              automaticLayout: true,
            }}
            onMount={handleEditorDidMount}
          />
        </div>

        <div className="p-4 overflow-auto bg-gray-50">
          <Output
            setoutput={setoutput}
            output={output}
            lang={languages}
            editorRef={editorRef}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayGround;
