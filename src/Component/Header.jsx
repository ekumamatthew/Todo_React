import React from "react";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  color: white;

  @media (min-width: 600px) {
    text-align: center;
    color: white;
  }
`;

const P = styled.p`
  font-size: 15px;
  font-family: Jokerman;
  text-align: right;

  @media (min-width: 600px) {
    font-size: 15px;
    font-family: Jokerman;
    text-align: right;
  }
`;

const H = styled.p`
  font-size: 44px;
  font-family: "Jokerman";
  font-style: normal;
  font-weight: 400;
  margin-top: -3px;

  @media (min-width: 600px) {
    font-size: 64px;
    font-family: "Jokerman";
    font-style: normal;
    font-weight: 400;
  }
`;

const Hex = styled.p`
  font-family: "Istok Web";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: -30px;

  @media (min-width: 600px) {
    font-family: "Istok Web";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
`;

export function HeaderText (){
    return (
      <Header>
        <P>Billion Dollar App</P>
        <H>Daily Task</H>
        <Hex>Proper preparation prevents poor performance</Hex>
      </Header>
    );
}