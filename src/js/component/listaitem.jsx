import React from 'react';
import { FaWindowClose } from "react-icons/fa";

import '../../styles/listaitem.css';

function ListItem(props) {
    return (
        <div className='item-container'>
            <p className='item-text'>{props.itemText}</p>
            <div
                className='close-container'
                onClick={() => props.deleteItem(props.id)}
            >
                <FaWindowClose className='close-icon' />
            </div>
        </div>
    );
}

export default ListItem;