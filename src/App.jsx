import './App.css';
import { 
  useStartGameMutation,
  useAddPlayerMutation,
  useMovePlayerMutation,
  useGetPlayerInfoQuery,
  useDeletePlayerMutation,
  useGetGameQuery,
} from './api/walkGame';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter and Link
import NavigationBar from './components/NavigationBar';
import Container from 'react-bootstrap/Container';
import landingPageVideo from './assets/Desktop/landingPageVideo.mp4';
import LinkButton from "./components/LinkButton";

function App() {  
  const [start] = useStartGameMutation();
  const [addPlayer] = useAddPlayerMutation();
  const [movePlayer] = useMovePlayerMutation();
  const { data: playerInfo } = useGetPlayerInfoQuery();
  const { data: gameInfo } = useGetGameQuery();
  const [deletePlayer] = useDeletePlayerMutation();

  return (
    <Router>
      <>
        <NavigationBar />
        <video style={{ position: 'fixed', top: '0px', zIndex: '-1', width: '100%' }} preload="auto" autoPlay muted="muted">
          <source src={landingPageVideo} type="video/mp4" />
        </video>
        <Container className='container-fluid' />
        <button onClick={start}>start game</button>
        <button onClick={addPlayer}>add player</button>
        <button onClick={movePlayer}>move player</button>
        <button onClick={deletePlayer}>delete player</button>
        <LinkButton to="dashboard" label='Play' />
      </>
    </Router>
  );
}

export default App;
