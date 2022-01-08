import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cakecontainer(){
const numofcake = useSelector(state => state.cake.numofcake);
const dispatch = useDispatch();

    return (<div>
        <h1>Num of Cakes - {numofcake} </h1>
        <button onClick={()=> dispatch({type:'Buy_Cake'})} >Buy_Cake</button>
    </div>)
}


export default Cakecontainer