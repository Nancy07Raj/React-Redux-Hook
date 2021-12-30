import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function IcecreamContainer(){
    const numofIce = useSelector(state => state.Ice.numofIce);
    const dispatch = useDispatch();

    return(<div>
        <h1>Num of Icecream - {numofIce}</h1>
        <button onClick={()=> dispatch({type:'Buy_Ice'})}>Buy_Ice</button>
    </div>);
}

export default IcecreamContainer