import React, { Component } from 'react'
import './item-add-form.css'
import ItemList from '../item-list'

export default class ItemAddForm extends Component {

    maxId = 100

    state = {
        specItemData: [],
        term: '',
        filter: 'all'
    }

    createTodoSpec(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        const newSpec = this.createTodoSpec(text)

        this.setState(({specItemData}) => {
            const newArr = [
                ...specItemData,
                newSpec
            ]

            return {
                specItemData: newArr
            }
        })
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    deleteItem = (id) => {
        this.setState(({ specItemData }) => {
            const idx = specItemData.findIndex((el) => el.id === id)

            const newArray = [
                ...specItemData.slice(0, idx),
                ...specItemData.slice(idx + 1)
            ]

            return {
                specItemData: newArray
            }
        })
    }

    render() {

        const { specItemData } = this.state

        return (
            <div className="item-add-form-parent">

                <ItemList
                    specItemData={specItemData}
                    onDeleted={ this.deleteItem }/>

                <div className="item-add-form-block">
                    <form className="item-add-form d-flex"
                          onSubmit={this.onSubmit}>
                        <input type="text"
                               className="form-control"
                               onChange={this.onLabelChange}
                               placeholder="Enter item"
                               value={this.state.label}/>
                        <button
                            className="btn btn-outline-secondary">
                            Add item
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}