import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {increment} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    const {count, isLoading, users, error} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const handle = () => {
        // dispatch(increment(5))
        dispatch(fetchUsers())
    }
    return (
        <div className="App">
            <h1>{count}</h1>
            {isLoading && <h2>Loading ...</h2>}
            {error && <h2>{error}</h2>}
            {JSON.stringify(users, null, 2)}
            <button onClick={handle}>INCREMENT</button>
        </div>
    );
}

export default App;
