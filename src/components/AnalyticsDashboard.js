// src/components/AnalyticsDashboard.js
import React, { useMemo } from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, XAxis, YAxis, Tooltip, Bar,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#82ca9d', '#8884d8'];

export default function AnalyticsDashboard({ tasks }) {
  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    const byPriority = [1,2,3,4,5].map(p => ({
      priority: p,
      count: tasks.filter(t => t.priority === p).length
    }));
    return { total, done, byPriority };
  }, [tasks]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold dark:text-white mb-4">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Completion Rate */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Done', value: stats.done },
                  { name: 'Pending', value: stats.total - stats.done }
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                label
              >
                <Cell key="done" fill={COLORS[0]} />
                <Cell key="pending" fill={COLORS[1]} />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* By Priority */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={stats.byPriority} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <XAxis dataKey="priority" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count">
                {stats.byPriority.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
