import * as React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link to="/" className="navbar-brand" href="#">
      PropertyCrossReact
    </Link>
    <Link to="/faves">
      <button className="btn btn-info my-2 my-sm-0">Faves</button>
    </Link>
  </nav>
);
