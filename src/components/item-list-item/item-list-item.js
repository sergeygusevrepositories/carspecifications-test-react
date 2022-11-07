import React, {Component} from 'react'
import './item-list-item.css'

export default class ItemListItem extends Component {
    render() {

        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props

        return (
            <div className="item-list-item">

                    <span
                        className="list-list-item-label">
                        { label }
                    </span>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                            onClick={onDeleted}>
                        x
                    </button>



            </div>
        )

    }
}

