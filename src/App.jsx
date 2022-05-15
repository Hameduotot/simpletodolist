import { useState } from "react";
import InputBox from "./Inputbox";
import ToDo from "./ToDo";

function App() {
  const [todoText, setTodoText] = useState([]);

  return (
    <div className="App">
      <InputBox setTodoText={setTodoText} />
      <div>
        {todoText.map((todo) => (
          <ToDo todoText={todo} setTodoText={setTodoText} />
        ))}
      </div>
    </div>
  );
}

export default App;
