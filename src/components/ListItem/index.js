import React from 'react';
import './style.scss';

export const ListItem = (props) =>{

    const deleteItem = () =>{
        props.deleteItem(props.index);
    }

    return (
        <>
            <li className="list-item" title="listItem">
                <input className="delete-button" type="button" onClick={deleteItem} value="Borrar" title={`deleteItem_${props.index}`}/>
                {props.item}
            </li>
        </>
    )
}