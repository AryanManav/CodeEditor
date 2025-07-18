import './PlayGround.css';
import './CodeEditor.css';
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import Editor, { loader } from '@monaco-editor/react';

const CodeEditor = forwardRef(({ initialCode = '', language = 'java' }, ref) => {
  const editorRef = useRef(null);
  const [systemTheme, setSystemTheme] = useState('light');

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSystemTheme(isDark ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setSystemTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    loader.init().then((monaco) => {
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
          'editorLineNumber.activeForeground': '#c678dd',
          'editor.selectionBackground': '#3e4451',
          'editor.inactiveSelectionBackground': '#3e445180',
          'editorWhitespace.foreground': '#3b4048',
          'editorIndentGuide.background': '#3b4048',
          'editorIndentGuide.activeBackground': '#c678dd',
        },
      });

      monaco.editor.setTheme(systemTheme === 'dark' ? 'leetDark' : 'vs');
    });
  }, [systemTheme]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  useImperativeHandle(ref, () => ({
    getValue: () => editorRef.current?.getValue() || '',
    setValue: (code) => editorRef.current?.setValue(code || ''),
  }));

  return (
    <div className="rounded-xl overflow-hidden shadow-lg dark:shadow-purple-900 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-gray-900 p-2 transition-colors duration-300">
      <Editor
        theme={systemTheme === 'dark' ? 'leetDark' : 'vs'}
        height="80vh"
        language={language}
        defaultValue={initialCode}
        options={{
          fontSize: 15,
          lineHeight: 24,
          fontFamily: 'Fira Code, monospace',
          fontLigatures: true,
          automaticLayout: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          bracketPairColorization: { enabled: true },
          quickSuggestions: true,
          renderLineHighlight: 'line',
          fixedOverflowWidgets: true,
          suggestOnTriggerCharacters: true,
          tabSize: 2,
          padding: { top: 10, bottom: 10 },
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
});

export default CodeEditor;