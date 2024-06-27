import { Home } from './components/Home';
import { Game } from './components/Game';
import { Over } from './components/Over';
import { useGameStore } from './store/Store';

function App() {
  const { gameStatus } = useGameStore();

  switch (gameStatus) {
    case 'home':
      return <Home />;
    case 'game':
      return <Game />;
    case 'over':
      return <Over />;
    default:
      return null;
  }
}

export default App;
