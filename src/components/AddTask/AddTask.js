import React from 'react';

import styles from './styles.scss';

class AddTask extends React.Component {
  render() {
    return (
        <div className={styles.formbox}>
          <input type="text" placeholder="add new task"/>
          <button className={styles.button}>add</button>
        </div>
    );
  }
}

export default AddTask;
