"use client";

import React, { useState } from 'react';
import { Option } from '../../interfaces'

// Define the props interface
interface SelectProps {
  placeholder: string;
  options: Option[];
  selected: Option | null;
  onChange: (selection: Option) => void;
}

// Functional component with default props
export const Select: React.FC<SelectProps> = ({placeholder, selected, options, onChange}) => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div data-testid="select-component">
      <div className="flex">
        <div className="w-30 flex-none mr-3">Filtered by:</div>
        <div className="relative flex-none cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
          <span>{selected ? selected.label : placeholder}</span>
          <span className="ml-2">v</span>
        </div>
      </div>
      {showOptions && (
        <div className="cursor-pointer absolute bg-white text-black-300 dark:bg-gray-700 rounded-md">
          {options.map(option => (
            <div onClick={() => {
              onChange(option);
              setShowOptions(false);
            }} key={option.value} className="pt-2 pb-2 pl-3 pr-3 dark:hover:bg-gray-900">
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;