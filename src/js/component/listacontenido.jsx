import React, { useState } from 'react';
import ListInput from './listainput.jsx';
import { v4 as uuidv4 } from 'uuid';

//styles
import '../../styles/listacontenido.css';

import ListCounter from './listaconteo.jsx';
import ListItem from './listaitem.jsx';

function ListContainer() {

    const [itemsArray, setItemsArray] = useState([]);
    const [itemsLength, setItemsLength] = useState(0);

    const addItem = (item) => {
        if (item.text.trim()) {
            item.text = item.text.trim();
            const updatedItems = [item, ...itemsArray];
            setItemsArray(updatedItems);
        };
        setItemsLength(itemsArray.length + 1);
    }

    const deleteItem = (id) => {
        const updatedItems = itemsArray.filter(item => item.id !== id);
        setItemsArray(updatedItems);
        setItemsLength(itemsArray.length - 1)
    }

    return (
        <div className='list-container'>

            <ListInput onSubmit={addItem} />
            <div className='todos-container'>
                {
                    itemsArray.map((item, id) =>
                        <ListItem
                            key={item.id}
                            id={item.id}
                            itemText={item.text}
                            deleteItem={deleteItem}
                        />
                    )
                }
            </div>
            <ListCounter listLength={itemsLength} />
        </div>
    );
}

export default ListContainer;