import React from 'react';
// import styles from './src/styles/App.scss';
const now = new Date();

class Header extends React.Component {
  render() {
    return (
      // className={styles.title}
      <div>
        <h1 className="title">Buenas noches señooooora!</h1>
        <h3>Son las {now.toTimeString()}, hora de moverse!</h3>
      </div>
    );
  }
}

export default Header;
