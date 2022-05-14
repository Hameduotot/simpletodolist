import { useState } from "react";
import InputBox from "./Inputbox";
import ToDo from "./ToDo";


function App() {
  const [todoText, setTodoText] = useState([]);

  return (
    <div className="App">
     
      <InputBox setTodoText={setTodoText} />
     
      <ToDo todoItem={todoText} setTodoText={setTodoText} />
    </div>
  );
}

export default App;
