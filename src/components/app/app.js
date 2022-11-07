import React, { Component } from 'react'
import SpecList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import SpecAddForm from'../spec-add-form'
import './app.css'

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoSpec('Brand'),
            this.createTodoSpec('Engine'),
            this.createTodoSpec('Air suspension'),
            this.createTodoSpec('Body color'),
            this.createTodoSpec('Type of paint'),
            this.createTodoSpec('Wheel size'),
            this.createTodoSpec('Seats')
        ],
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

    addSpec = (text) => {
        const newSpec = this.createTodoSpec(text)

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newSpec
            ]

            return {
                todoData: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)

        const oldItem = arr[idx]
        const newSpec = { ...oldItem, [propName]: !oldItem[propName] }

        return [
            ...arr.slice(0, idx),
            newSpec,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onSearchChange = (term) => {
        this.setState({ term })
    }

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    search(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filter(items, filter) {

        switch(filter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }

    }

    render() {

        const { todoData, term, filter } = this.state

        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="cpecs">
                    <SpecList
                        todos={visibleItems}
                        onDeleted={ this.deleteItem }
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}/>

                    <SpecAddForm onSpecAdded={this.addSpec} />
                </div>
            </div>
        )
    }

}
