import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = ({ users, setUsers }) => {
  useEffect(() => {
    if (users.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [users, setUsers]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const buttonStyle = {
    padding: '8px 15px',
    margin: '0 5px',
    backgroundColor: 'Green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    display: 'inline-block',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
  };

  const hoverStyle = {
    backgroundColor: '#0056b3',
  };

  const deleteHoverStyle = {
    backgroundColor: '#c82333',
  };

  return (
    <div className="user-list">
      <Link to="/create" style={{ ...buttonStyle, marginBottom: '10px', backgroundColor: '#28a745' }}>
        Create User
      </Link>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ backgroundColor: "LightBlue" }}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link
                    to={`/user/${user.id}`}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${user.id}`}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    style={deleteButtonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = deleteHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = deleteButtonStyle.backgroundColor}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
