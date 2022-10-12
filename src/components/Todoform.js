import React, { useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
  align-self: stretch;
  text-align: center;
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  background: none;
  border: 1px solid #bbb;
  border-radius: 10px 0 0 10px;
  padding: 10px;
  margin: 5px auto;
  min-width: 50%;
  max-width: 600px;
`;

const Button = styled.button`
  background-color: #2563eb;
  border-radius: 0 10px 10px 0;
  color: white;
  font-size: small;
  border: none;
  padding: 11px 20px;
  cursor: pointer;
  :hover {
    background-color: #3b82f6;
  }
`;

function Todoform({ settodos, todos }) {
  const submitForm = (e) => {
    e.preventDefault();
    const newArr = [
      ...todos,
      { id: Math.random().toString(), text: todoref.current.value },
    ];
    settodos(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
    todoref.current.value = "";
  };

  const todoref = useRef();

  return (
    <Form>
      <Label>Add a todo</Label>
      <Input ref={todoref} />
      <Button onClick={submitForm}>add</Button>
    </Form>
  );
}

export default Todoform;
