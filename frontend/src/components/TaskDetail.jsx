// TaskDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskService from '../services/TaskService';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await TaskService.getTaskById(id);
      setTask(response.data);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Task Details</h1>
      {task ? (
        <div className="card">
          <div className="card-body" style={{ lineHeight: '2.5em' }}>
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text" style={{ maxWidth: '600px' }}>{task.description}</p>
            <p className="card-text">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskDetail;
