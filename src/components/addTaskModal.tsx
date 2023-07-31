import React, { useState } from 'react';
import Modal from 'react-modal';

type Props = {
   onSubmit: (title: string, message: string, priority: number) => void;
};

const AddTaskModal = ({ onSubmit }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target?.titlebox?.value ?? '';
    const message = event.target?.messagebox?.value ?? '';
    const priority = event.target?.prioritylist?.value ?? '';
    onSubmit(title, message, priority);
    toggleModal();
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowModal(true)}>Add Task</button>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="Add Task Modal"
      >
        <h3>Add task:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:<br />
            <input
              style={{ width: '200px' }}
              id="titlebox"
              type="text"
              name="title"
            />
          </label>
          <br />
          <label>
            Message:<br />
            <textarea
              style={{ width: '500px' }}
              id="messagebox"
              name="message"
            />
          </label>
          <br />
          <label>
            Priority:<br />
            <select
              id="prioritylist"
              style={{ width: '100px' }}
              defaultValue="2"
              name="priority"
            >
              <option value="1">Low</option>
              <option value="2">Normal</option>
              <option value="3">High</option>
            </select>
          </label>
          <br />
          <button type="submit">Add task</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
