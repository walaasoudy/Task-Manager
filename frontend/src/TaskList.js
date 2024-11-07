import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from './services/api';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleToggleComplete = async (id) => {
    const task = tasks.find((task) => task._id === id);
    const updatedTask = { ...task, completed: !task.completed };
    const updated = await updateTask(id, updatedTask);
    setTasks(
      tasks.map((task) => (task._id === updated._id ? updated : task))
    );
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
