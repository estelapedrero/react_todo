import React from 'react';
import styles from './styles.scss';

const now = new Date();

class Header extends React.Component {
  render() {
    return (
      // className={styles.title}
      <div className={styles.topnav}>
        <h1 className={styles.title}>Miscellany</h1>
        <p>"...saldaremos todas las cuentas pendientes..."</p>
      </div>
    );
  }
}

export default Header;
// <!--h3>Son las {now.toTimeString()}, hora de moverse!</h3-->*/
