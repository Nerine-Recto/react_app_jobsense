import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation
import '../styles/Home.css'; // Ensure you have a CSS file for styling

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="col col-1">
        <div className="main-header">
          <h1 id="welcome-message">Welcome user!</h1>
        </div>
        <div className="menu">
          <b>Menu</b>
        </div>
        <div className="list-item" onClick={() => navigate('/education')}>
          <p className="label">Learn about Job Sequencing</p>
          <div className="list-item-button"></div>
        </div>
        <div className="list-item" onClick={() => navigate('/simulation')}>
          <p className="label">Job Sequencing Simulator</p>
          <div className="list-item-button"></div>
        </div>
        <div className="list-item" onClick={() => navigate('/quiz')}>
          <p className="label">Job Sequencing Challenge</p>
          <div className="list-item-button"></div>
        </div>
      </div>
      <div className="col col-2">
        <div className="row">
          <div className="top-square"></div>
          <div className="top-square"></div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}

export default Home;
