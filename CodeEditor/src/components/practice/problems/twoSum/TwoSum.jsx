import { useState, useRef, useEffect } from "react";
import Output from "../../../Output";
import { LANGUAGE_CODE } from "./langCodes";
import Editor, { loader } from "@monaco-editor/react";
import DropDown from '../../../DropDown';

function TwoSum({ initialLang = "java", boilerplateCode }) {
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
      // Theme setup here if needed
    });
  }, []);

  const isDarkMode =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0f1117] dark:text-gray-100 transition-colors duration-300">  
      {/* Problem Description */}
      <div className="px-4 py-6 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#141625]">
        <h1 className="text-2xl font-bold dark:text-purple-400 text-purple-600 mb-2">1. Two Sum</h1>
        <p className="text-base">
          Given an array of integers <code>nums</code> and an integer <code>target</code>, return the <b>indices</b> of the two numbers such that they add up to <code>target</code>.
          <br />You may assume that each input has exactly one solution, and you may not use the same element twice.
        </p>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
          You can return the answer in any order.
        </p>

        <div className="mt-4 text-sm space-y-2 text-gray-600 dark:text-gray-300">
          <div><b>Example:</b></div>
          <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md text-xs">
            Input: nums = [2, 7, 11, 15], target = 9 <br />
            Output: [0, 1] <br />
            <i>Because nums[0] + nums[1] == 9, we return [0, 1].</i>
          </div>

          <div className="mt-4"><b>Constraints:</b></div>
          <ul className="list-disc list-inside">
            <li>2 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            <li>-10⁹ ≤ target ≤ 10⁹</li>
            <li>Only one valid answer exists</li>
          </ul>

          <div className="mt-4"><b>Function Signature:</b></div>
          <pre className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md text-xs">
            public int[] twoSum(int[] nums, int target)
          </pre>

          <div className="mt-4"><b>Hint:</b></div>
          <p className="text-sm italic text-purple-400 dark:text-purple-300">
            Use a HashMap to store the complement (target - nums[i]) and check if it exists.
          </p>
        </div>
      </div>

      {/* Header with Dropdown */}
      <div className="border-b border-gray-300 dark:border-gray-700 px-4 py-2 bg-purple-50 dark:bg-[#1e1e2f] flex flex-col md:flex-row justify-between items-start md:items-center">
        
        <DropDown lang={language} handleClick={handleClick} />
      </div>

      {/* Main Editor + Output Section */}
      <div className="flex flex-col md:flex-row flex-grow h-[calc(100vh-320px)] overflow-hidden">
        
        {/* Editor Section */}
        <div className="md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
          <Editor
            theme={isDarkMode ? "leetDark" : "lightCustomTheme"}
            height="100%"
            language={language}
            value={value}
            options={{
              fontSize: 15,
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

        {/* Output Section */}
        <div className="md:w-1/2 h-1/2 md:h-full overflow-auto p-4 bg-gray-100 dark:bg-[#141625]">
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

export default TwoSum;
