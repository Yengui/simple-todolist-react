import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Divbtn = styled.button`
  background: none;
  border: none;
  margin: 0 5px 0 0;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`;

const Red = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`;

const Inputedit = styled.input`
  background: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 5px;
`;

function Todo({ item, settodos, todos }) {
  const deleteItem = (id) => {
    const newArr = [...todos.filter((todo) => todo.id !== id)];
    settodos((current) => newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };
  const [edit, setedit] = useState(false);
  const [edited, setedited] = useState(item.text);

  const setchange = () => {
    const currentItems = JSON.parse(localStorage.getItem("todos"));
    const newitems = currentItems.map((thisitem) =>
      thisitem.id === item.id ? { id: item.id, text: edited } : thisitem
    );
    localStorage.setItem("todos", JSON.stringify(newitems));
    settodos(newitems);
    setedit(false);
  };
  return (
    <Div>
      <div>
        {edit ? (
          <>
            <Divbtn
              type="button"
              onClick={() => {
                setedit(false);
                setedited(item.text);
              }}
            >
              🚫
            </Divbtn>
            <Divbtn type="button" onClick={() => setchange()}>
              ✅
            </Divbtn>
            <Inputedit
              value={edited}
              onChange={(e) => {
                setedited(e.target.value);
              }}
            />
          </>
        ) : (
          <>
            <Divbtn type="button" onClick={() => setedit(true)}>
              ✏️
            </Divbtn>
            {item.text}
          </>
        )}
      </div>
      <Red onClick={() => deleteItem(item.id)}>❌</Red>
    </Div>
  );
}

export default Todo;
