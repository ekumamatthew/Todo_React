import React from "react";
import { HeaderText } from "./Component/Header";
import { Input } from "./Component/Input";
import { Completed } from "./Component/CompletedTask";
import { StartPage } from "./Component/StartPage";
import { Body } from "./Component/Page.style";







export function  TodoApp (){
    return(
        <Body>
        <HeaderText/>
        <Input/>
        <Completed/>
        <StartPage/>
        </Body>
             
        
             

    
   

    );
}