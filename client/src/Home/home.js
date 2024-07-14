import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="container">
        <div className="half">
            <p><Link to="/people">People</Link></p>
        </div>
        <div className="half">
            <p><Link to="/partner">Partner</Link></p>
        </div>
  </div>
  );
}

export default Home;
