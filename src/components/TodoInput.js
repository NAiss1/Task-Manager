// src/components/TodoInput.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

const priorityOptions = [
  { value: 1, label: '1 (Lowest)' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5 (Highest)' },
];
const tagOptions = [
  { value: 'Work', label: 'Work' },
  { value: 'Home', label: 'Home' },
  { value: 'Shopping', label: 'Shopping' },
];

export default function TodoInput({ addTask }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState(priorityOptions[2]);
  const [tags, setTags] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({
      id: Date.now(),
      text: text.trim(),
      completed: false,
      dueDate: dueDate ? dueDate.toISOString() : null,
      priority: priority.value,
      tags: tags.map(t => t.value),
    });
    setText('');
    setDueDate(null);
    setPriority(priorityOptions[2]);
    setTags([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex">
        <input
          className="flex-grow border rounded-l px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="bg-blue-500 text-white px-4 rounded-r">Add</button>
      </div>
      <div className="flex space-x-2 items-end">
        <DatePicker
          selected={dueDate}
          onChange={date => setDueDate(date)}
          placeholderText="Due date"
          className="border rounded px-2 h-10 dark:bg-gray-700 dark:text-white"
          dateFormat="yyyy/MM/dd"
        />
        <Select
          options={priorityOptions}
          value={priority}
          onChange={setPriority}
          className="react-select-container flex-1"
          classNamePrefix="react-select"
          styles={{ control: base => ({ ...base, minHeight: '40px' }) }}
        />
        <Select
          options={tagOptions}
          isMulti
          value={tags}
          onChange={setTags}
          placeholder="Tags"
          className="react-select-container flex-1"
          classNamePrefix="react-select"
          styles={{ control: base => ({ ...base, minHeight: '40px' }) }}
        />
      </div>
    </form>
);
}
