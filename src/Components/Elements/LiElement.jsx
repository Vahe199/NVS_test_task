import React from "react";
import styled,{css} from "styled-components";
const StyledLi = styled.div`
  display: ${props => props.display || "flex"};
  flex-wrap: ${props => props.flexWrap || "nowrap"};
  flex-direction:${props => props.direction || "row"};
  border-radius: ${props => props.borderRadius || "0"};
  align-items: ${props => props.align || "center"};
  justify-content:${props => props.justify || "center"} ;
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "6px 0"};
  cursor: pointer;
  font-size: 30px;
  height:${({height}) =>height || "auto"};
   width:${({width}) =>width || "100%"};
  border-bottom: 1px solid #eee;
  background-color: ${({background}) => background || "transparent"};
  &:hover{
    background-color:#9f77c1;
    color: #fff;
  }

`
const LiElement = (props) => {
    return<StyledLi {...props}/>
}

export default LiElement;