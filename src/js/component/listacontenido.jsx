import React, { useState, useEffect } from 'react';
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

    const deleteItem = (itemIndex) => {
        const updatedItems = itemsArray.filter((item,index) => itemIndex!==index);
        setItemsArray(updatedItems);
        setItemsLength(itemsArray.length - 1)
    }
    useEffect(async()=>{ 
        var result= await fetch("https://assets.breatheco.de/apis/fake/todos/user/jaziel",)
        if (!result.ok) return 
        result=await result.json()      
        console.log (result.result)
        setItemsArray(result)    
    },[]
    )
    useEffect(async()=>{
        if (itemsArray.length==0) return
        const body=JSON.stringify(itemsArray.map((item)=>{
            return {
                ...item,
                done:false
            }
        }))
        console.log(body)
        var result= await fetch("https://assets.breatheco.de/apis/fake/todos/user/jaziel", {
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body
        })
        if (!result.ok) return 
        result=await result.json      
        console.log (result.result) 
        
    },[itemsArray])


    return (
        <div className='list-container'>

            <ListInput onSubmit={addItem} />
            <div className='todos-container'>
                {
                    itemsArray.map((item, index) =>
                        <ListItem
                            key={index}
                            itemText={item.label}
                            deleteItem={()=>deleteItem(index)}
                        />
                    )
                }
            </div>
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@beyonce/video/7133705533990636846" data-video-id="7133705533990636846" data-embed-from="oembed" style={{"max-width": "605px"}} > <section> <a target="_blank" title="@beyonce" href="https://www.tiktok.com/@beyonce?refer=embed">@beyonce</a> <p></p> <a target="_blank" title="♬ PURE/HONEY - Beyoncé" href="https://www.tiktok.com/music/PUREHONEY-7125598549672216577?refer=embed">♬ PURE/HONEY - Beyoncé</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
            <ListCounter listLength={itemsLength} />
        </div>
    );
}

export default ListContainer;