import axios from 'axios';

const BASE_URL = 'http://localhost:4000/tasks'; // Replace with your backend API URL

const TaskService = {
  getAllTasks: () => axios.get(BASE_URL),
  getTaskById: (id) => axios.get(`${BASE_URL}/${id}`),
  createTask: (newTask) => axios.post(BASE_URL, newTask),
  updateTask: (id, updatedTask) => axios.put(`${BASE_URL}/${id}`, updatedTask),
  deleteTask: (id) => axios.delete(`${BASE_URL}/${id}`),
};

export default TaskService;
