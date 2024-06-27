import { useEffect } from 'react';
import { useGameStore } from '../../store/Store';
import styles from './Home.module.css';

export default function Home() {
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
      <h1 className={styles.title}>Snake</h1>
      <button type="button" className={styles.button} onClick={() => store.setGameStatus('game')}>
        START
      </button>
    </div>
  );
}
