import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchCats, fetchCatCategories} from "./store/reducers/ActionCreators";
import {SideBar} from "./Components/Main/SideBar";
import Wrapper from "./Components/Elements/DivWrapper";
import {ShowPage} from "./Components/Main/ShowPage";


function App() {
    const {isLoading, error} = useAppSelector(state => state.cat)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchCatCategories())
    }, [])

    return (
        <Wrapper>
            <SideBar/>
            {isLoading && <h2>Loading ...</h2>}
            {error && <h2>{error}</h2>}
            <Routes>
                <Route path="/category/:id" element={<ShowPage/>}/>
            </Routes>
        </Wrapper>
    );
}

export default App;
