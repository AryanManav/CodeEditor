import './PlayGround.css';
import { useEffect, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import './CodeEditor.css';

function CodeEditor({ value, languages }) {
  const editorRef = useRef(null);

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('darkGitHubTheme', {
        base: 'vs-dark',
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
        ],
        colors: {
          'editor.foreground': '#abb2bf',
          'editor.background': '#1D1F21',
          'editorCursor.foreground': '#528bff',
          'editor.lineHighlightBackground': '#2c313c',
          'editorLineNumber.foreground': '#636d83',
          'editor.selectionBackground': '#3e4451',
          'editor.inactiveSelectionBackground': '#3e445199',
        },
      });
    });
  }, []);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-700 bg-[#1D1F21] p-2">
      <Editor
        theme="darkGitHubTheme"
        height="80vh"
        language={languages}
        value={value}
        options={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: 'Fira Code, monospace',
          automaticLayout: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          scrollbar: {
            vertical: 'hidden',
            horizontal: 'hidden',
            handleMouseWheel: false,
            alwaysConsumeMouseWheel: false,
            useShadows: false,
          },
          overviewRulerLanes: 0,
          renderLineHighlight: 'none',
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default CodeEditor;
