import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from './services/api';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // State to store the task being updated
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false); // State to toggle the update form

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

  const handleUpdateTask = (id) => {
    // Find the task being updated
    const task = tasks.find((task) => task._id === id);
    setSelectedTask(task); // Set the selected task for updating
    setNewTitle(task.title); // Pre-fill the form with the current title
    setNewDescription(task.description); // Pre-fill the form with the current description
    setIsUpdating(true); // Show the update form
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    if (newTitle && newDescription) {
      // Update the task using the API
      const updatedTask = { title: newTitle, description: newDescription };
      const response = await updateTask(selectedTask._id, updatedTask);
      
      // Update the task list with the updated task
      setTasks(
        tasks.map((task) =>
          task._id === response._id ? { ...task, ...response } : task
        )
      );

      // Close the form and reset the state
      setIsUpdating(false);
      setNewTitle('');
      setNewDescription('');
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
          onUpdate={handleUpdateTask}
        />
      ))}

      {isUpdating && (
        <div className="update-task-modal">
          <h2>Update Task</h2>
          <form onSubmit={handleSubmitUpdate}>
            <input
              type="text"
              placeholder="Task Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Task Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            />
            <button type="submit">Update Task</button>
            <button
              type="button"
              onClick={() => setIsUpdating(false)} // Close the form without saving
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskList;
