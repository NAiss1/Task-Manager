import React, { useState } from 'react';
import { format } from 'date-fns';

function TodoItem({ task, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSubmit = e => {
    e.preventDefault();
    if (!editText.trim()) return;
    updateTask(task.id, { text: editText.trim() });
    setIsEditing(false);
  };

  const due = task.dueDate ? format(new Date(task.dueDate), 'yyyy/MM/dd') : null;

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-800 p-2 rounded shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={()=>toggleComplete(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex-grow flex">
            <input
              className="flex-grow border rounded px-2 py-1 mr-2"
              value={editText}
              onChange={e=>setEditText(e.target.value)}
            />
            <button className="text-blue-500">Save</button>
          </form>
        ) : (
          <span className={`flex-grow ${task.completed?'line-through text-gray-500':'dark:text-gray-200'}`}>
            {task.text}
          </span>
        )}
        <div className="flex space-x-2">
          {!isEditing && (
            <button onClick={()=>setIsEditing(true)} className="text-yellow-500">Edit</button>
          )}
          <button onClick={()=>deleteTask(task.id)} className="text-red-500">Delete</button>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center space-x-2 text-sm">
        {due && <span className="px-2 py-1 bg-red-100 text-red-800 rounded">{due}</span>}
        <span className={`px-2 py-1 rounded bg-priority${task.priority} text-sm`}>
          Priority: {task.priority}
        </span>
        {task.tags.map(tag=>(
          <span key={tag} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TodoItem;
