import React from 'react'
import './Blocks.css'


function Blocks(props){
    return(<>
        <div className='block-div' style={{backgroundColor:props.color}}>
    </div>
    </>)
}

export default Blocks;