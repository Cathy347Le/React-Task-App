import React from 'react';

// function FormSelect({ values, callback, disabled = false, readonly = false }) {
function FormSelect({ formOptions, date, onSetDate }) {
  // console.log(formOptions);
  return (
    <select
      id={formOptions.id}
      name={formOptions.name}
      value={date}
      onChange={(e) => onSetDate(e.target.value)}
    >
      {formOptions.daysOfTheWeek.map(([index, value]) => {
        if (index === 0) {
          return (
            <option key={index} value={''}>
              --{value}--
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
