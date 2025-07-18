import './PlayGround.css';
import { useState, useRef, useEffect } from 'react';
import Output from './Output';
import DropDown from './DropDown';
import { LANGUAGE_CODE } from '../lang';
import Editor, { loader } from '@monaco-editor/react';

function PlayGround({ initialLang = "java", boilerplateCode }) {
  const [language, setLanguage] = useState(initialLang);
  const [output, setOutput] = useState("");
  const [value, setValue] = useState(boilerplateCode || LANGUAGE_CODE[initialLang]);
  const editorRef = useRef(null);

  const handleClick = (lang) => {
    setLanguage(lang);
    setValue(LANGUAGE_CODE[lang]); // You can extend to set correct boilerplate too
    setOutput("");
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      // Light Theme
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
          'editor.background': '#f9fafb',
          'editor.foreground': '#1f2937',
          'editorCursor.foreground': '#7e22ce',
          'editor.lineHighlightBackground': '#f3f4f6',
          'editorLineNumber.foreground': '#9ca3af',
          'editor.selectionBackground': '#ddd6fe',
        },
      });

      // Dark Theme
      monaco.editor.defineTheme('leetDark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'comment', foreground: '7f848e', fontStyle: 'italic' },
          { token: 'keyword', foreground: 'c678dd', fontStyle: 'bold' },
          { token: 'number', foreground: 'd19a66' },
          { token: 'string', foreground: '98c379' },
          { token: 'operator', foreground: '56b6c2' },
          { token: 'type', foreground: 'e5c07b' },
          { token: 'function', foreground: '61afef' },
          { token: 'variable', foreground: 'e06c75' },
        ],
        colors: {
          'editor.background': '#1e1e2f',
          'editor.foreground': '#abb2bf',
          'editorCursor.foreground': '#528bff',
          'editor.lineHighlightBackground': '#2c313c',
          'editorLineNumber.foreground': '#5c6370',
          'editor.selectionBackground': '#3e4451',
        },
      });
    });
  }, []);

  const isDarkMode = typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark');

  return (
<div className="min-h-screen bg-white text-gray-900 dark:bg-[#0f1117] dark:text-gray-200 transition-colors duration-300 flex flex-col">
  {/* Header */}
  <div className="border-b border-gray-300 dark:border-gray-700 px-4 py-2 bg-purple-50 dark:bg-gray-900">
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
      <DropDown lang={language} handleClick={handleClick} />
    </div>
  </div>

  {/* Title */}
  <div className="text-center py-2 px-2">
    <p className="text-xl font-semibold text-purple-700 dark:text-purple-300 break-words">
      Online {language.toUpperCase()} Compiler
    </p>
  </div>

  {/* Responsive Layout */}
  <div className="flex flex-col md:flex-row flex-grow h-[calc(100vh-136px)]">
    {/* Code Editor */}
    <div className="md:w-1/2 w-full h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
      <Editor
        theme={isDarkMode ? 'leetDark' : 'lightCustomTheme'}
        height="100%"
        language={language}
        value={value}
        options={{
          fontSize: 16,
          lineHeight: 24,
          minimap: { enabled: false },
          fontFamily: 'Fira Code, monospace',
          automaticLayout: true,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          tabSize: 2,
          padding: { top: 10, bottom: 10 },
        }}
        onMount={handleEditorDidMount}
      />
    </div>

    {/* Output */}
    <div className="md:w-1/2 w-full h-1/2 md:h-full p-4 overflow-auto bg-gray-50 dark:bg-[#141625]">
      <Output
        setoutput={setOutput}
        output={output}
        lang={language}
        editorRef={editorRef}
      />
    </div>
  </div>
</div>

  );
}

export default PlayGround;
