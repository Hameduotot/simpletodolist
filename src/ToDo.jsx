import React, { useState } from "react";

const initToDo = [{ id: 100, text: "text1", checked: true }];

const ToDo = ({ todoText, setTodoText }) => {
  function handleDelete(id) {
    setTodoText((todoText) => {
      const filterItem = todoText.filter((d) => d.id !== id && d);
      return filterItem;
    });
  }

  return (
    <div>
      <div>
        <li key={todoText.id}>{todoText.text}</li>
        <button onClick={() => handleDelete(todoText.id)}>X</button>
      </div>
    </div>
  );
};

export default ToDo;
