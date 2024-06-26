import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';
import TaskService from '../services/TaskService';
import './TaskListStyle.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await TaskService.getAllTasks();
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleFetchTasks = () => {
        fetchTasks(); // Function to fetch tasks
    };

    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <div className="task-list">
                {tasks.length === 0 ? (
                    <p>No tasks found. <Link to="/tasks/add">Add a new task</Link>.</p>
                ) : (
                    tasks.map(task => (
                        <TaskItem key={task._id} task={task} fetchTasks={handleFetchTasks} />
                    ))
                )}
            </div>
            <div className="add-new-task">
                <Link to="/tasks/add">Add a new task</Link>.
            </div>
        </div>
    );
};

export default TaskList;
