import React from "react";
import FlexWrapper from "../Elements/FlexWrapper";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import LiElement from "../Elements/LiElement";
import { fetchCats} from "../../store/reducers/ActionCreators";
import {useNavigate} from "react-router-dom";


export const SideBar = () => {
    const {category,limit} = useAppSelector(state => state.cat)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const handleFetchCategory = (id) => {
        dispatch(fetchCats({id:id,limit:limit}))
        navigate(`/category/${id}`)
    }
    return(
        <FlexWrapper background={"#cdb5e1"} justify={"flex-start"} width={"240px"} padding={"20px 0"}>
            {category?.map((item, i)=> <LiElement key={i} onClick={()=>handleFetchCategory(item.id)}>{item.name}</LiElement>)}
        </FlexWrapper>
    )
}