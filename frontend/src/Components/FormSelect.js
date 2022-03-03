import React from 'react';

// function FormSelect({ values, callback, disabled = false, readonly = false }) {
function FormSelect({ options, onSetDate }) {
  return (
    <select
      data-testid="select-option"
      //   value={date}
      // onChange={({ target: { value } }) => callback(value)}
      onChange={(e) => onSetDate(e.target.value)}
    >
      {options.map(([index, value]) => {
        if (index === 0) {
          return (
            <option key={index} value={''}>
              {value}
            </option>
          );
        } else {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        }
      })}
    </select>
  );
}

export default FormSelect;
