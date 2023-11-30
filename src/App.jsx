import './App.css'
import { 
  useStartGameMutation,
  useAddPlayerMutation,
  useMovePlayerMutation,
  useGetPlayerInfoQuery,
  useDeletePlayerMutation,
  useGetGameQuery,
} from './api/walkGame'
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/NavigationBar'

function App() {  
  const [start] = useStartGameMutation();
  const [addPlayer] = useAddPlayerMutation();
  const [movePlayer] = useMovePlayerMutation();
  const { data: playerInfo } = useGetPlayerInfoQuery()
  const { data: gameInfo } = useGetGameQuery()
  const [deletePlayer] = useDeletePlayerMutation();
  console.log(playerInfo)
  console.log(gameInfo)
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <div></div>
      <button onClick={start}>start game</button>
      <button onClick={addPlayer}>add player</button>
      <button onClick={movePlayer}>move player</button>
      <button onClick={deletePlayer}>delete player</button>
    </>
  )
}

export default App
