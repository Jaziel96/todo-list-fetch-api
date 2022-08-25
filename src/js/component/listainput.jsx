import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../../styles/listainput.css';

function ListInput(props) {

    const [inputText, setInputText] = useState('');


    const updateInput = e => {
        setInputText(e.target.value);
    }

    const sendTodo = e => {
        e.preventDefault();
        const newList = {
            text: inputText,
            id: uuidv4(),
        }
        props.onSubmit(newList);
        event.target.reset();
    }

    return (
        <form
            className='form-container'
            onSubmit={sendTodo}
        >
            <input
                type='text'
                className='list-input'
                placeholder='Enter a todo'
                onChange={updateInput}
            />
            <button className='add-button btn btn-success'>Agregar</button>
        </form>
    );
}

export default ListInput;