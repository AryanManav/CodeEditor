import React from 'react';
import { Dropdown } from "flowbite-react";
import { LANGUAGE } from '../lang';

const DropDown = ({ lang, handleClick }) => {
  const languages = Object.entries(LANGUAGE);

  return (
    <div className="relative w-full">
      {/* Top bar with center text and right dropdown */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* Empty div to balance the layout */}
        <div className="w-1/4" />


        {/* Right-aligned dropdown */}
        <div className="w-1/4 flex justify-end">
          <Dropdown label={lang.toUpperCase()} inline>
            {languages.map(([language], index) => (
              <Dropdown.Item key={index} onClick={() => handleClick(language)}>
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
