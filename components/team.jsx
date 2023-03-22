import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from '../styles/team.module.css';

export default function Team() {
  const [activeColumn, setActiveColumn] = useState('owner');

  return (
    <div className={styles.columns}>
      <div
        className={`${styles.column} ${
          activeColumn === 'owner' ? styles.active : ''
        }`}
        onClick={() => setActiveColumn('owner')}
      >
        <h2>Owner</h2>
        <FaUser className={styles.avatar} />
      </div>
      <div
        className={`${styles.column} ${
          activeColumn === 'developer' ? styles.active : ''
        }`}
        onClick={() => setActiveColumn('developer')}
      >
        <h2>Developer</h2>
        <FaUser className={styles.avatar} />
      </div>
      <div
        className={`${styles.column} ${
          activeColumn === 'manager' ? styles.active : ''
        }`}
        onClick={() => setActiveColumn('manager')}
      >
        <h2>Manager</h2>
        <FaUser className={styles.avatar} />
      </div>
    </div>
  );
}
