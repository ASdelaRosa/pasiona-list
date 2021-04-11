import React, { useState }  from 'react';
import { ListItem } from '../ListItem';
import './style.scss';

const initialList = [
    "primer elemento inicial",
    "segundo elemento inicial",
    "tercer elemento inicial",
];

export const List = () =>{
    const [list, setList] = useState(initialList);

    const newItem = (event) =>{
        if (event.target.newItem.value && event.target.newItem.value!==''){
            event.preventDefault();
            const newList = [...list,event.target.newItem.value];
            setList(newList);
            event.target.newItem.value = '';
        }
    }

    const deleteItem = (itemIndex) => {
        const newList = list.slice(0);;
        newList.splice(itemIndex,1);;
        setList(newList);
    }

    return (
        <div className="container">
            <form onSubmit={newItem} title="form">
                <label> Nombre del elemento: </label>
                <input type="text" name="newItem" title="inputItem"/>
                <input type="submit" value="Submit" title="submitButton"/>
            </form>
            <ul title="list">
                {list.map((item, index) => <ListItem key={index} item={item} index={index} deleteItem={deleteItem}/>)}
            </ul>
            {(!list.length && <p>No hay elementos en la lista</p>)}
        </div>
    )
}