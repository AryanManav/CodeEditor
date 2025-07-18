import React from 'react';
import { Dropdown } from "flowbite-react";
import { LANGUAGE } from '../lang';

const DropDown = ({ lang, handleClick }) => {
  const languages = Object.entries(LANGUAGE);

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="w-1/4" />

        <div className="w-1/4 flex justify-end">
          <Dropdown
            label={lang.toUpperCase()}
            inline
            className="text-gray-900 bg-white dark:bg-zinc-800 dark:text-gray-200 border dark:border-zinc-700"
          >
            {languages.map(([language], index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleClick(language)}
                className="hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                {language.toUpperCase()}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
