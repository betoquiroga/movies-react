import React from 'react';

const Header = props => (
  <header className="main-header main-header--dark">
    <div className="ed-container full">
      <div className="ed-item l-25">{props.title}</div>
    </div>
  </header>
);

export default Header;
