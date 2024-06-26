import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={TaskList} />
          <Route exact path="/tasks/add" Component={TaskForm} />
          <Route exact path="/tasks/:id" Component={TaskDetail} />
          <Route exact path="/tasks/edit/:id" Component={TaskForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
