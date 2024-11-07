import React, { useState, useEffect } from 'react';
import { updateTask } from './services/api';

const TaskUpdateForm = ({ taskId, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`/tasks/${taskId}`);
      const task = await response.json();
      setTitle(task.title);
      setDescription(task.description);
      setCompleted(task.completed);
    };

    fetchTask();
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(taskId, { title, description, completed });
    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default TaskUpdateForm;
