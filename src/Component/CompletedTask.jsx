import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"


const CompletedDisplay = styled.div`
  text-align: center;
  font-family: Istok Web;
  font-size: 20px;
  margin-top: -10px;
  color: white;

  @media (min-width: 600px) {
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    color: white;
  }
`;

const Items = styled.li`
  text-align: left;
`;



export async function completedHandler(taskID) {
  const complete = await axios.put(`/completed?taskID=${taskID + 1}`);
  const displayCompleted = await axios.get("/completedTodos");

  return displayCompleted;
}



export function Completed() {

  const [completedTask, setCompletedTask] = useState([]);

 
    
  

  useEffect(() => {
    ( async function () {
    let  {data}  = await completedHandler();
    setCompletedTask(data)})()

  }, [completedTask]);

  return (
    <CompletedDisplay>
      <h2>completed Task</h2>
      <ul className="li">
        {completedTask.map((list, index) => (
          <Items key={index}>{list}</Items>
        ))}
      </ul>
    </CompletedDisplay>
  );
}
