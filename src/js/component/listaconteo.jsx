import React from "react";

function ListCounter(props) {

    return (
        <div className='counter-container'>
            {props.listLength} todo's
        </div>
    );
}

export default ListCounter;