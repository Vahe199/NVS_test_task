import React from "react";
import styled,{css} from "styled-components";
const StyledCard = styled.div`
  display: ${props => props.display || "flex"};
 
  border-radius: ${props => props.borderRadius || "8px"};
  align-items: ${props => props.align || "center"};
  justify-content:${props => props.justify || "center"} ;
  margin: ${({margin}) => margin || "10px"};
  padding: ${({padding}) => padding || "10px"};
  height:${({height}) =>height || "350px"};
   width:${({width}) =>width || "300px"};
  background-color: ${({background}) => background || "#fff"};
  box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.15);
  
`
const StyledImg = styled.img`
  height: 320px;
  width: 290px;
  
`
const Card = (props) => {
    return(<StyledCard {...props}>
        <StyledImg src={props.item.url}/>
    </StyledCard>)
}

export default Card;