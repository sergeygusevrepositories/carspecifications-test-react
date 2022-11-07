import React from "react";
import ItemListItem from '../item-list-item'
import './item-list.css'

const ItemList = ( { specItemData, onDeleted } ) => {

    const elements = specItemData.map((item) => {

        const { id, ...itemProps } = item

        return (
            <li key={id} className="item-list-group-item">
                <ItemListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
}

export default ItemList