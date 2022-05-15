import React, { useState } from "react";
import { v4 as uid } from "uuid";
const InputBox = ({ setTodoText }) => {
  const [inputText, setInputText] = useState("");

  function handleSubmit() {
    if (inputText !== "")
      setTodoText((todoText) => {
        console.log(todoText);
       return [...todoText, { text: inputText, id: uid(), checked: false }];
      });
    setInputText("");
  }

  return (
    <div>
      
      <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default InputBox;
