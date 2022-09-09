import React from "react";
import FlexWrapper from "../Elements/FlexWrapper";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Card from "../Elements/Card";
import Button from "../Elements/Button";
import {useParams} from "react-router-dom";
import {fetchCats} from "../../store/reducers/ActionCreators";
import {increment} from "../../store/reducers/CatSlice";

export const ShowPage = () => {
    const {cat,limit} = useAppSelector(state => state.cat)
    const params = useParams()
    const dispatch = useAppDispatch()
    const handleShow = () => {
        dispatch(fetchCats({id:Number(params.id),limit:limit +10}))
        dispatch(increment(10))
    }
    return(
       <FlexWrapper direction={"row"} flexWrap={"wrap"} scroll height={'100vh'}>
           <Button onClick={handleShow}>show more</Button>
           {cat.map((item,i) => <Card key={i} item={item}/>)}

       </FlexWrapper>
    )
}