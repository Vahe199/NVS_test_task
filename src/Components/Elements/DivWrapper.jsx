import React from "react";
import styled,{css} from "styled-components";
const StyledWrapper = styled.div`
  display: ${props => props.display || "flex"};
  flex-wrap: ${props => props.flexWrap || "unset"};
  flex-direction:${props => props.direction || "row"};
  border-radius: ${props => props.borderRadius || "0"};
  align-items: ${props => props.align || "stretch"};
  position: ${props => props.position};
  justify-content:${props => props.justify || "stretch"} ;
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  height:${({height}) =>height || "auto"};
  
`
const Wrapper = (props) => {
    return<StyledWrapper {...props}/>
}

export default Wrapper;