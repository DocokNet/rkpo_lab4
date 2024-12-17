// src/App.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DndPage from './DndPage';

function TodoPage() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // Состояние для фильтрации

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const navigate = useNavigate();

  const handlerRedirectDnD = () => {
    navigate('/dnd'); 
  };
  
  const filteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }
    return todos; 
  };

  return (
    <div>
      <h1 id="title">My To-Do List</h1>
      <div class="menu">
        <div class="form">
          <form id="add-form" onSubmit={addTodo}>
            <input id="todo-input"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Добавить новую задачу..."
            />
            <button class="button" type="submit">Добавить</button>
          </form>
          
        </div>
        <div class="line">
          <button onClick={() => setFilter('all')}>Все</button>
          <button class="button" onClick={() => setFilter('active')}>Невыполненные</button>
          <button class="button" onClick={() => setFilter('completed')}>Выполненные</button>
        </div>
      </div>
      <TodoList todos={filteredTodos()} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div class="redirect">
        <button onClick={handlerRedirectDnD}>Перейти к странице с DragAndDrop</button>
      </div>
      
    </div>
  );
}

export default TodoPage;