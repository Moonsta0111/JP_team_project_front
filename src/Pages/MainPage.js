// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>퍼스널 컬러 AI 자가진단</h1>
      <div style={{ marginTop: '30px' }}>
        <Link to="/diagnosis">
          <button style={buttonStyle}>진단 시작</button>
        </Link>
        <Link to="/personal-color-info">
          <button style={buttonStyle}>퍼스널컬러란?</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '15px 30px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default MainPage;
