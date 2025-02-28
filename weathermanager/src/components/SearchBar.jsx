import React, { useState } from "react";

export default function({weatherGet}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    weatherGet(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit"/>
    </form>
  );
}
