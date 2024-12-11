import React, { useState } from 'react';

function InputExample() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>Input Controlado en React</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Valor del input: {inputValue}</p>
    </div>
  );
}

export default InputExample;