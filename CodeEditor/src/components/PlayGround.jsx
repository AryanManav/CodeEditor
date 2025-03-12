import './PlayGround.css'
import { useState, useRef, useEffect } from 'react'
// import Footer from './Footer'
import Output from './Output'
// import Navbar from './Navbar'
import DropDown from './DropDown'
import { LANGUAGE_CODE } from '../lang'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

function App() {
  useEffect(() => {
    // Load the monaco instance from the loader
    loader.init().then((monaco) => {
      // Define the dark GitHub-like theme
      monaco.editor.defineTheme('darkGitHubTheme', {
        base: 'vs-dark', // Dark theme as a base
        inherit: true,
        rules: [
          { token: 'comment', foreground: '6a737d' },
          { token: 'keyword', foreground: 'c678dd' },
          { token: 'number', foreground: 'd19a66' },
          { token: 'string', foreground: '98c379' },
          { token: 'operator', foreground: '56b6c2' },
          { token: 'identifier', foreground: 'e5c07b' },
          { token: 'delimiter', foreground: 'abb2bf' },
          { token: 'type', foreground: 'e06c75' },
          { token: 'function', foreground: '61afef' },
          // Add more token colors as needed
        ],
        colors: {
          'editor.foreground': '#abb2bf',
          'editor.background': '#1D1F21',
          'editorCursor.foreground': '#528bff',
          'editor.lineHighlightBackground': '#2c313c',
          'editorLineNumber.foreground': '#636d83',
          'editor.selectionBackground': '#3e4451',
          'editor.inactiveSelectionBackground': '#3e445199',
        }
      });
    });
  }, []);
  const [languages, setLanguage] = useState("java");
  const [output, setoutput] = useState("");
  const [value, setValue] = useState(LANGUAGE_CODE["java"]);

  const handleClick = (languages) => {
    setLanguage(languages)
    setValue(
      LANGUAGE_CODE[languages]
    )
    setoutput("")
  }
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
  }

  return (
    <>
      <div className='dropdown'>
        <DropDown lang={languages} handleClick={handleClick} />
      </div>
      <section className='upper'>

        <div className="leftsect">
          <Editor theme="darkGitHubTheme" height="80vh"
            language={languages}
            value={value}
            options={{
              fontSize: 16,
              lineHeight: 20,
            }}
            onMount={handleEditorDidMount}
          />
        </div>

        <div className="rightsect">
          <Output setoutput={setoutput} output={output} lang={languages} editorRef={editorRef} />
        </div>
      </section>

      <section className='lower'></section>
    </>
  )
}

export default App
