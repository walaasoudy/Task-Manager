import React from 'react';

const TaskCard = ({ task, onDelete, onToggleComplete, onView, onUpdate }) => {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onToggleComplete(task._id)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
      <button onClick={() => onUpdate(task._id)}>Update Task</button>
    </div>
  );
};

export default TaskCard;
