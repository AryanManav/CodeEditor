import { useState, useRef, useEffect } from "react";
import Output from "../../../Output";
import { LANGUAGE_CODE } from "./langCodes";
import Editor, { loader } from "@monaco-editor/react";
import DropDown from '../../../DropDown';

function BinarySearch({ initialLang = "java", boilerplateCode }) {
  const [language, setLanguage] = useState(initialLang);
  const [output, setOutput] = useState("");
  const [value, setValue] = useState(boilerplateCode || LANGUAGE_CODE[initialLang]);
  const editorRef = useRef(null);

  const handleClick = (lang) => {
    setLanguage(lang);
    setValue(LANGUAGE_CODE[lang]);
    setOutput("");
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      // theme setup (if needed)
    });
  }, []);

  const isDarkMode =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0f1117] dark:text-gray-100 transition-colors duration-300">
      {/* Problem Summary */}
      <div className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#141625]">
        <h1 className="text-2xl font-bold dark:text-purple-400 text-purple-600 mb-2">2. Binary Search</h1>
        <p className="text-base leading-relaxed">
          Given a sorted array of integers <code>nums</code> and an integer <code>target</code>, return the index of <code>target</code> if it is present in the array. If not, return -1.
        </p>

        <div className="mt-4 text-sm space-y-2 text-gray-500 dark:text-gray-300">
          <div><b>Example:</b></div>
          <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md text-xs">
            Input: nums = [-1, 0, 3, 5, 9, 12], target = 9 <br />
            Output: 4
          </div>

          <div className="mt-4"><b>Constraints:</b></div>
          <ul className="list-disc list-inside">
            <li>1 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i], target ≤ 10⁹</li>
            <li>All the integers in nums are unique and sorted in ascending order</li>
          </ul>

          <div className="mt-4"><b>Function Signature:</b></div>
          <pre className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md text-xs">
            public int binarySearch(int[] nums, int target)
          </pre>

          <div className="mt-4"><b>Hint:</b></div>
          <p className="text-sm italic text-purple-400 dark:text-purple-300">
            Use binary search with two pointers (low, high) and check mid.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 px-4 py-2 bg-purple-50 dark:bg-[#1e1e2f]">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <DropDown lang={language} handleClick={handleClick} />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-136px)]">
        {/* Code Editor */}
        <div className="border-r border-gray-300 dark:border-gray-700">
          <Editor
            theme={isDarkMode ? "leetDark" : "lightCustomTheme"}
            height="100%"
            language={language}
            value={value}
            options={{
              fontSize: 16,
              lineHeight: 24,
              minimap: { enabled: false },
              fontFamily: "Fira Code, monospace",
              automaticLayout: true,
              scrollBeyondLastLine: false,
              wordWrap: "on",
              tabSize: 2,
              padding: { top: 10, bottom: 10 },
            }}
            onMount={handleEditorDidMount}
          />
        </div>

        {/* Output */}
        <div className="p-4 overflow-auto bg-gray-100 dark:bg-[#141625]">
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

export default BinarySearch;
