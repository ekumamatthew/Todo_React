import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: white;
`;

const InputText = styled.input`
  height: 40px;
  width: 230px;
  border-radius: 10px;
  font-size: 25px;
  margin-bottom: 5px;

  @media (min-width: 600px) {
    width: 471px;
    height: 61px;
    border-radius: 5px;
    font-size: 35px;
    margin-top: 25px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  margin-left: 10px;
  font-size: 25px;
  margin-top: 5px;

  @media (min-width: 600px) {
    width: 227px;
    height: 61px;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 35px;
  }
`;

export function Input(){
    const [input, setInput] = useState("");

     const postTodos = async () => {
       const add = await axios.post("/todos", { text: input });
       console.log(add);
     };


    return (
      <Container>
        
          <InputText 
              placeholder="add your todo"
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />

          <Button onClick={postTodos}>
            Submit
          </Button>
        
      </Container>
    );
     
}