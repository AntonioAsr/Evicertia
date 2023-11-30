import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  useStartGameMutation,
  useAddPlayerMutation,
  useMovePlayerMutation,
  useGetPlayerInfoQuery,
  useDeletePlayerMutation,
  useGetGameQuery,
} from './api/walkGame'
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
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={start}>start game</button>
      <button onClick={addPlayer}>add player</button>
      <button onClick={movePlayer}>move player</button>
      <button onClick={deletePlayer}>delete player</button>
    </>
  )
}

export default App
