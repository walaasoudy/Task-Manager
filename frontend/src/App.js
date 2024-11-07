import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
 