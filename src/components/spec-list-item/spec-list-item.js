import React, {Component} from 'react'
import './spec-list-item.css'
import ItemAddForm from'../item-add-form';

export default class SpecListItem extends Component {

    render() {

        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props

        let classNames = 'todo-list-item'

        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <div className="spec-list-item">
                <span className={classNames}>
                    <span
                        className="todo-list-item-label"
                        onClick={onToggleDone}>
                        { label }
                    </span>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                            onClick={onDeleted}>
                        x
                    </button>
                </span>

                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        )

    }
}

