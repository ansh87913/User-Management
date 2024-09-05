import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  const cardStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const infoStyle = {
    fontSize: '18px',
    margin: '5px 0',
    color: '#555',
  };

  const companyStyle = {
    fontSize: '20px',
    margin: '15px 0 5px',
    fontWeight: 'bold',
    color: '#007bff',
  };

  const addressStyle = {
    fontSize: '16px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{user.name}</h2>
      <p style={infoStyle}>Email: {user.email}</p>
      <p style={infoStyle}>Phone: {user.phone}</p>
      <p style={infoStyle}>Website: {user.website}</p>
      <p style={companyStyle}>{user.company.name}</p>
      <p style={addressStyle}>
        Address: {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserDetail;
