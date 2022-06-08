import React, { useState, useEffect } from "react";
import axios from "axios";
import { completedHandler } from "./CompletedTask";
import { AiOutlineDelete } from "react-icons/ai";
import { BiCalendarEdit } from "react-icons/bi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import styled from "styled-components";


const Container = styled.div`
  text-align: center;
  color: white
`;
const ItemArea = styled.div`
  font-size: 15px;
  font-family: Istok Web;
  background: white;
  color: #000039;
  margin-bottom: 3px;
  border-radius: 10px;

  @media (min-width: 600px) {
    font-size: 30px;
    font-family: Istok Web;
    background: white;
    color: #000039;
    margin-bottom: 5px;
    border-radius: 20px;
  }
`;

const Icons = styled.div`
.delete{
   margin-right: 30px;
}

.completed{
    margin-left: 30px;

`;

export function StartPage() {
  const [todos, setTodos] = useState([]);
  

 

  //const [deltodo, setDeltodo] = useState();

  useEffect(() => {

     (async function () {
       const disp = await getTodos();
       setTodos(disp);
       console.log(disp)
     })()
   
   
  }, [todos]);

 

  /** const getTodos = async () =>{
    await fetch('/todos')
    .then(response => response.json())
    .then(todosData => setTodos(todosData))
  } **/

  /**  async function getTodos(){
    const items = await fetch('/todos');
    const todoList = await items.json();
    setTodos(todoList);
  }
  */
   const getTodos = async () => {
    const items = await axios.get("/todos");
  
    return items.data 
    
  };

  


 

  async function deleteHandler( taskID) {
    const del = await axios.delete(`/todo?taskID=${taskID + 1}`);
    const delReturn = await getTodos();
    setTodos(delReturn);
    console.log(del);

    // setDeltodo(del);
  }

 

  return (
    <Container>
      <div>
        {todos.map((item, index) => (
          <ItemArea key={index} >
            <div> {item} </div>
            <Icons>
              <AiOutlineDelete
                onClick={() => deleteHandler( index)}
                className="delete"
                
              />
              <BiCalendarEdit />
              <MdOutlineIncompleteCircle
                onClick={() => completedHandler( index)}

                className="completed"
              />
            </Icons>
          </ItemArea>
        ))}
      </div>
    </Container>
  );
}


