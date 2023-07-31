import React, { useState } from 'react';
import AddTaskModal from './addTaskModal.tsx';
import Task from './taskItemCard.tsx';
import { Item } from '../interfaces/Item';

const Content = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [arr, setArr] = useState<Item[]>([
    { id: 1, title: 'Task 1', message: 'Message 1', priority: 1 },
    { id: 2, title: 'Task 2', message: 'Message 2', priority: 2 },
    { id: 3, title: 'Task 3', message: 'Message 3', priority: 3 },
  ]);

  const addTask = (title: string, message: string, priority: number) => {
    setArr((arr) => [
      ...arr,
      {
        id: arr.length + 1,
        title,
        message,
        priority: Number(priority),
      },
    ]);
    console.log(arr)
  };

  const handleEditTask = (id: number, title: string, message: string, priority: number) => {
    const updatedArr = arr.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title,
          message,
          priority: Number(priority),
        };
      }
      return task;
    });
    setArr(updatedArr);
  };

  const handleDeleteTask = (id: number) => {
    const newArr = arr.filter((task) => task.id !== id);
    setArr(newArr);
  };

  return (
    <div>
      <div
        style={{
          width: '1085px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        className="border"
      >
        <h2>Tasks: </h2>
        <p style={{ fontSize: '21px', marginLeft: 'auto' }}>Search by name:</p>
        <input
          style={{ width: '200px' }}
          type="text"
          name="title"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p style={{ fontSize: '21px', marginLeft: 'auto' }}>Filter by:</p>
        <select
          style={{ width: '100px' }}
          name="filter"
          onChange={(e) => setFilter(Number(e.target.value) === 0 ? "" : e.target.value.toString())}
          defaultValue=""
        >
          <option value="0">No filter</option>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">High</option>
        </select>
      </div>
      <div style={{ width: '1085px' }} className="border">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {arr
            .filter(
              (task) =>
                (filter === '' || task.priority === parseInt(filter)) &&
                (searchTerm === '' || task.title?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
            )
            .map((task) => (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                message={task.message}
                priority={task.priority}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            ))}
        </div>
      </div>
      <div style={{ padding: '10px', width: '1085px' }} className="border">
          <AddTaskModal
            onSubmit= { addTask }
          />
      </div>
    </div>
  );
};

export default Content;
