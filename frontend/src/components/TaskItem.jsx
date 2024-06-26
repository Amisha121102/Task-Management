import React from 'react';
import { Link } from 'react-router-dom';
import TaskService from '../services/TaskService';

const TaskItem = ({ task, fetchTasks }) => {

    const handleTaskCompletion = async () => {
        try {
            const updatedTask = { ...task, completed: !task.completed };
            await TaskService.updateTask(task._id, updatedTask); // Update task in database
            fetchTasks(); // Refresh task list
        } catch (error) {
            console.error('Error marking task as completed:', error);
        }
    };

    const handleDeleteTask = async () => {
        try {
            await TaskService.deleteTask(task._id); // Delete task from database
            fetchTasks(); // Refresh task list
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={`completedCheckbox_${task._id}`}
                        checked={task.completed}
                        onChange={handleTaskCompletion}
                    />
                    <label className="form-check-label" htmlFor={`completedCheckbox_${task._id}`}>Completed</label>
                </div>
                <Link to={`/tasks/${task._id}`} className="btn btn-primary mr-2">View Details</Link>
                <Link to={`/tasks/edit/${task._id}`} className="btn btn-secondary mr-2">Edit</Link>
                <button className="btn btn-danger" onClick={handleDeleteTask}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;
