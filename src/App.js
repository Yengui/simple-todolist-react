import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";

const Todocontainer = styled.div`
  background-color: white;
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid gray;
  box-shadow: 2px 2px 5px #bbb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

const Appcontainer = styled.div`
  background-color: #fff;
  height: 100vh;
  padding-top: 20px;
`;

const Clock = styled.div`
  font-size: 72px;
`;

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const mylist = localStorage.getItem("todos");
    if (!mylist) return;

    settodos(JSON.parse(mylist));
  }, []);

  return (
    <Appcontainer>
      <Todocontainer>
        <Clock>🕒</Clock>
        <h1>Todo List</h1>
        <Todoform settodos={settodos} todos={todos} />
        <Todos settodos={settodos} todos={todos} />
      </Todocontainer>
    </Appcontainer>
  );
}

export default App;
