import useSnakeGame from '../../hooks/useSnakeGame';
import styles from './Game.module.css';

export default function Game() {
  const canvasRef = useSnakeGame({ row: 20, col: 20 });

  return <canvas ref={canvasRef} className={styles.board}></canvas>;
}
