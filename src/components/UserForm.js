import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = ({ users, setUsers }) => {
  const { id } = useParams();
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const user = users?.find(user => user.id === parseInt(id));
      if (user) setUserData(user);
    }
  }, [id, users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      setUsers(users.map(user => user.id === parseInt(id) ? userData : user));
    } else {
      const newUser = { ...userData, id: users.length + 1 };
      setUsers([...users, newUser]);
    }
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '18px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#218838',
  };

  return (
    <div style={formStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {id ? 'Edit User' : 'Create User'}
      </h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Phone:
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <button
          type="submit"
          style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
        >
          {id ? 'Update' : 'Create'} User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
