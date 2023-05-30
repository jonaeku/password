import React, { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const Encrypt = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const encryptedPassword = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
    const res = await axios.post('http://localhost:3001/passwords', { password: encryptedPassword });
    alert(`Password saved. Use this link to view the password: ${window.location.origin}/decrypt/${res.data.id}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Passwort verschlüsseln</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Encrypt and save password
      </button>
    </div>
  );
};

export default Encrypt;
