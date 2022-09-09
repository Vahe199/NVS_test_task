import React from "react";
import styled,{css} from "styled-components";
const StyledFlex = styled.div`
  display: ${props => props.display || "flex"};
  flex-wrap: ${props => props.flexWrap || "unset"};
  flex-direction:${props => props.direction || "column"};
  border-radius: ${props => props.borderRadius || "0"};
  align-items: ${props => props.align || "center"};
  position: ${props => props.position};
  justify-content:${props => props.justify || "center"} ;
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  height:${({height}) =>height || "100%"};
  min-height: 100vh;
   width:${({width}) =>width || "100%"};
  background-color: ${({background}) => background || "transparent"};
  transition: width 2s;
  overflow-x:  ${({overflowX}) => overflowX || "unset"};
  overflow-y:  ${({overflowY}) => overflowY || "unset"};
  ${props => props.scroll && css`
   overflow: auto;
  `}
  ${props => props.boxShadow && css`
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.15);
  `} 
  ${props => props.shadow && css`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `}
  ::-webkit-scrollbar-track{
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb{
    background-color: silver;
    border-radius: 15px;
  }
  ::-webkit-scrollbar{
    width: 3px;
  }
`
const FlexWrapper = (props) => {
    return<StyledFlex {...props}/>
}

export default FlexWrapper;