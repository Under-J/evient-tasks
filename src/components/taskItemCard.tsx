import React, { useState } from 'react';

type Props = {
  id?: number;
    title?: string;
    message?: string;
    priority?: number;
    onDelete: (id: number) => void;
    onEdit: (id: number, title: string, message: string, priority: number) => void;
};

function Task({ id, title, message, priority, onDelete, onEdit }: Props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedTitle = event.target?.edittitle?.value ?? '';
    const editedMessage = event.target?.editmessage?.value ?? '';
    const editedPriority = event.target?.editpriority?.value ?? 2;

    onEdit(Number(id), editedTitle, editedMessage, editedPriority);
    handleShowEdit();
  };

  const priorityText = priority === 1 ? 'Low' : priority === 2 ? 'Normal' : 'High';

  if (!showEdit) {
    return (
      <div className="border" style={{ padding: '15px', margin: '10px', width: '250px', height: '300px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{title}</h2>
          <p
            onClick={() => onDelete(Number(id))}
            style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              fontSize: '20px',
              color: 'red',
              cursor: 'pointer',
            }}
          >
            X
          </p>
        </div>

        <p>{message}</p>
        <p>{priorityText} priority</p>
        <button onClick={handleShowEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="border" style={{ padding: '15px', margin: '10px', width: '250px', height: '350px' }}>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <h2>Edit task</h2>
          <label>
            Title:{' '}
            <input
              id="edittitle"
              defaultValue={title}
              type="text"
              name="title"
              style={{ width: '220px' }}
            />
          </label>
          <label>
            Message:{' '}
            <textarea
              id="editmessage"
              defaultValue={message}
              name="message"
              style={{ width: '220px' }}
            />
          </label>
          <label>
            Priority:{' '}
            <select
              id="editpriority"
              defaultValue={priority}
              name="priority"
              style={{ width: '160px' }}
            >
              <option value="1">Low</option>
              <option value="2">Normal</option>
              <option value="3">High</option>
            </select>
          </label>
          <br />
          <button type="submit">Save</button>
          <button onClick={handleShowEdit}>Exit</button>
          <button onClick={() => onDelete(Number(id))}>Delete</button>
        </form>
      </div>
    );
  }
}

export default Task;
