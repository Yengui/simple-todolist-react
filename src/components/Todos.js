import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const Div = styled.div`
  text-align: left;
  min-width: 50%;
  max-width: 600px;
`;

function Todos({ todos, settodos }) {
  return (
    <Div>
      {todos.map((todo) => (
        <Todo key={todo.id} item={todo} settodos={settodos} todos={todos} />
      ))}
    </Div>
  );
}

export default Todos;
