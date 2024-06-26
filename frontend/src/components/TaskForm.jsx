// TaskForm.js
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import TaskService from '../services/TaskService';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description, dueDate};
      await TaskService.createTask(newTask);
      navigate('/'); // Redirect to task list after creation
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input type="Date" className="form-control" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
