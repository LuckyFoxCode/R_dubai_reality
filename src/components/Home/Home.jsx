import clsx from 'clsx';
import { useState } from 'react';
import styles from './Home.module.scss';

export const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={clsx(styles.home, isActive ? styles.active : null)}
      onClick={() => setIsActive(!isActive)}>
      Home
    </div>
  );
};