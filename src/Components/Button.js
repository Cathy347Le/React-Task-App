import React from 'react';
import './Button.scss';

function Button({ color, text, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: '#4b7bec',
  text: 'Need Button Text',
};

export default Button;
