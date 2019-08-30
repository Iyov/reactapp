import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '18px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {task} =  this.props;

        return <p style={this.StyleCompleted()} >
            {task.id} - 
            {task.title} - 
            {task.description}
            <input 
                type="checkbox" 
                onChange={this.props.ckeckDone.bind(this, task.id)}
            />
            <button 
                style={btnDelete} 
                onClick={this.props.deleteTask.bind(this, task.id)} 
            >
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '14px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '8px 8px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;