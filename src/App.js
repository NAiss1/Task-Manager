// src/App.js
import React, { useState, useEffect, useMemo } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import AnalyticsDashboard from './components/AnalyticsDashboard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('add'); // 'add' or 'search'

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addTask = t => setTasks(ts => [...ts, t]);
  const updateTask = (id, data) =>
    setTasks(ts => ts.map(x => x.id === id ? { ...x, ...data } : x));
  const deleteTask = id => setTasks(ts => ts.filter(x => x.id !== id));
  const reorderTasks = nts => setTasks(nts);

  const filtered = useMemo(() => {
    return tasks
      .filter(t => filter === 'All'
        ? true
        : filter === 'Active'
          ? !t.completed
          : t.completed
      )
      .filter(t => t.text.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [tasks, filter, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold dark:text-white">Task Manager</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* View Toggle */}
        <div className="flex mb-4">
          <button
            onClick={() => setView('add')}
            className={`flex-1 py-2 ${view==='add' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300' } rounded-l`}
          >
            Add Task
          </button>
          <button
            onClick={() => setView('search')}
            className={`flex-1 py-2 ${view==='search' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300' } rounded-r`}
          >
            Search / View
          </button>
        </div>

        {view === 'add' ? (
          <TodoInput addTask={addTask} />
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex-1">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
              </div>
              <div className="flex space-x-2">
                {['All', 'Active', 'Completed'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 rounded ${
                      filter === f
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <TodoList
              tasks={filtered}
              updateTask={updateTask}
              deleteTask={deleteTask}
              reorderTasks={reorderTasks}
              toggleComplete={id => updateTask(id, { completed: !tasks.find(t => t.id === id).completed })}
            />

            <AnalyticsDashboard tasks={tasks} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
