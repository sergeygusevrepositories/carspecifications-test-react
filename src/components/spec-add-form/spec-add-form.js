import React, { Component } from 'react'
import './spec-add-form.css'

export default class SpecAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSpecAdded(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="spec-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Enter specification"
                       value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary">
                    Add specification
                </button>
            </form>
        );
    }
}