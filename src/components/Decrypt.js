import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useParams, useNavigate } from 'react-router-dom';

const Decrypt = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const [timer, setTimer] = useState(15);
  let countdown;

  useEffect(() => {
    const fetchPassword = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/passwords/${id}`);
        const encryptedPassword = response.data.password;
        const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret key 123');
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        setPassword(decryptedPassword);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    fetchPassword();
  }, [id, navigate]);

  useEffect(() => {
    countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
      deletePassword();
    };
  }, []);

  const deletePassword = async () => {
    try {
      await axios.delete(`http://localhost:3001/passwords/${id}`);
      console.log('Password deleted from the database.');
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    if (timer === 0) {
      setPassword('');
      clearInterval(countdown);
    }
  }, [timer]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Password:</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '5px' }}>
        <p style={{ fontSize: '16px' }}>{password}</p>
        <button
          onClick={copyToClipboard}
          style={{
            padding: '5px 5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Copy
        </button>
      </div>
      {timer > 0 && <p>Verbleibende Zeit: {timer} Sekunden</p>}
    </div>
  );
};

export default Decrypt;
