import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserForm from './components/UserForm';
import './index.css'; 

function App() {
  const [users, setUsers] = useState([]); 

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
          <Route path="/user/:id" element={<UserDetail users={users} />} />
          <Route path="/create" element={<UserForm users={users} setUsers={setUsers} />} />
          <Route path="/edit/:id" element={<UserForm users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
