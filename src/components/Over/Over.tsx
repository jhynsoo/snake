import { useEffect } from 'react';
import { useGameStore } from '../../store/Store';
import styles from './Over.module.css';

export default function Over() {
  const store = useGameStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        store.setGameStatus('game');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [store]);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Game Over</h1>
      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={`${styles.button} ${styles.secondary}`}
          onClick={() => store.setGameStatus('home')}
        >
          HOME
        </button>
        <button type="button" className={styles.button} onClick={() => store.setGameStatus('game')}>
          RETRY
        </button>
      </div>
    </div>
  );
}
