import React, { useState } from "react";
import { v4 as uid } from "uuid";

const initToDo = [{ id: 100, text: "text1", checked: true }];

const ToDo = ({ setTodoText, todoItem }) => {
  function handleDelete(id) {
    setTodoText((todoText) => {
      const filterItem = todoText.filter((d) => d.id !== id && d);
      return filterItem;
    });
  }

  return (
    <div>
      <ul>
        {todoItem.map((todo) => (
          <div>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
