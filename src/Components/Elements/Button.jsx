import React from "react";
import styled,{css} from "styled-components";
const StyledButton = styled.button`
  display: ${props => props.display || "flex"};
  position: absolute;
  right: 40px;
  bottom: 50px;
  font-size: 24px;
 border: none;
  cursor: pointer;
  border-radius: ${props => props.borderRadius || "8px"};
  align-items: ${props => props.align || "center"};
  justify-content:${props => props.justify || "center"} ;
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "4px 8px"};
  height:${({height}) =>height || "auto"};
   width:${({width}) =>width || "auto"};
  color: #fff;
  background-color: ${({background}) => background || "#401662"};
  box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.15);
  
`
const StyledImg = styled.img`
  height: 320px;
  width: 290px;
  
`
const Button = (props) => {
    return(<StyledButton {...props}/>)
}

export default Button;