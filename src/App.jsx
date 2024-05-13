import React, { useState } from 'react';
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

  const handleAddTodo = () => {
    if (editIndex !== null) {
      // If in edit mode, update the todo at editIndex
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { name, email, phone };
      setTodos(updatedTodos);
      setEditIndex(null); // Reset editIndex after updating
    } else {
      // If not in edit mode, add a new todo
      const newTodo = { name, email, phone };
      setTodos([...todos, newTodo]);
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleEdit = (index) => {
    // Set the editIndex and populate the input fields with the todo data
    setEditIndex(index);
    const todoToEdit = todos[index];
    setName(todoToEdit.name);
    setEmail(todoToEdit.email);
    setPhone(todoToEdit.phone);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <h1 className='title'>Todo List</h1>
      <div className='form-group'>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <div className='todo-item' key={index}>
            <div>
              {todo.name} - {todo.email} - {todo.phone}
            </div>
            <div className='actions'>
              <button className='delete' onClick={() => handleDelete(index)}>Delete</button>
              <button className='edit' onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
