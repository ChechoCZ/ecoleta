import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>

        <main>
          <h1>Your waste collecting marketplace</h1>
          <p>We help people find collecting waste points in an efficient way.</p>

          <Link to="/register">
            <span>
              <FiLogIn />
            </span>

            <strong>Register collecting point</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;