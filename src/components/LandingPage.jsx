import { useState } from "react";
import NavigationBar from "./NavigationBar";
import landingPageVideo from '../assets/Desktop/landingPageVideo.mp4';
import LinkButton from "../components/LinkButton";
import WalkerGameInstance from "./WalkerGame";
import {
  useStartGameMutation,
  useAddPlayerMutation,
  useGetPlayerInfoQuery,
  useGetGameQuery,
  useDeletePlayerMutation,
  useMovePlayerMutation,
} from '../api/walkGame';
import {useGameContext} from '../enginge/gameContext';
import ChoosePlayerModal from '../components/ChoosePlayerModal';
import NiceModal from '@ebay/nice-modal-react';


function LandingPage(){
  // api
  const [start] = useStartGameMutation();
  const [addPlayer] = useAddPlayerMutation();
  const [movePlayer] = useMovePlayerMutation();
  const [deletePlayer] = useDeletePlayerMutation();
  const { data: playerInfo } = useGetPlayerInfoQuery();
  const { data: gameInfo } = useGetGameQuery();

  // context
  const context = useGameContext();

  // ui
  const gameSize = context.gameSize;
  const startGame = async() => {
    // TODO: Nice to have: Handle redirect in a better way, 
    // if api fails we get a broken UI.
    await start(gameSize).then((res)=>{
      console.log('starting game',res)
    })
  }

  return(
      <>
        <NavigationBar />
        <video style={{position: 'fixed', top: '0px', zIndex: '-1', width: '100%'}} preload="auto" autoPlay muted="muted">
          <source src={landingPageVideo} type="video/mp4" />
        </video>
        <button onClick={() => NiceModal.show(ChoosePlayerModal)}>
          Choose player
        </button>
      <LinkButton 
        to="walkerGame"
        label="PLAY"
        onClick={startGame} disabled={!context.player}
        style={{backgroundColor: '#7749F8'}}
        >
        </LinkButton>
        {!context.player && (
          <span style={{ position: 'fixed', bottom: '3%', left: '50%', transform: 'translate(-50%, 50%)', display: 'flex', justifyContent: 'center' }}>
            Choose Player in order to play
          </span>
        )
        }
      </>
  )
}

export default LandingPage;