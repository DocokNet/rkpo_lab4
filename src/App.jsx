// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './TodoPage';
import DndPage from './DndPage';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/rkpo_lab4" element={<TodoPage />} />
      <Route path="/dnd" element={<DndPage />} />
    </Routes>
  </Router>
  );
}

export default App;