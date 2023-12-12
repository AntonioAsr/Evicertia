import React, {useEffect, useState} from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal } from 'antd';
import { useGameContext } from '../enginge/gameContext';
import Button from './Button';
import player1 from '../assets/players/player_1.png';
import player2 from '../assets/players/player_2.png';
import player3 from '../assets/players/player_3.png';
import player4 from '../assets/players/player_4.png';
import player5 from '../assets/players/player_5.png';
import player5Zoomed from '../assets/zoomedPlayers/player_5_Zoomed.png';
import PlayerPath from './PlayerPath';
import './ChooseCharacterModal.css';

const CardCharacterModal = NiceModal.create(({playerPosition}) => {
  // const images = [player1, player2, player3, player4, player5, player6];

  const modal = useModal();
  const context = useGameContext();

  const modalStyles = {
    header: {
      borderRadius: 0,
    },
    body: {
      background: '#343333',
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
      margin: '0px',
    },
    content: {
      borderRadius: '20px', // need this one so we dont see background white
      padding: '0px',
    },
  };

  return (
    <Modal
      className='.ant-modal-content'
      onOk={() => modal.hide()}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
      styles={modalStyles}
      closeIcon={<span style={{ color: '#ffffff' }}>x</span>}
      footer={<PlayerPath playerPosition={playerPosition} />
    }
    >
    <div className="image-container"
      style={{
        backgroundImage: `url(${player5Zoomed})`,
        width: '100%',
        height: '400px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
    </div>
    </Modal>
  );
});

export default CardCharacterModal;
