import React from "react";
import TodoListItem from '../spec-list-item'
import './spec-list.css'

const SpecList = ({ todos, onDeleted, onToggleImportant, onToggleDone } ) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
}

export default SpecList