import React, {useEffect, useState} from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal } from 'antd';
import './ChoosePlayerModal.css';
import Button from './Button';
import player1 from '../assets/players/player_1.png';
import player2 from '../assets/players/player_2.png';
import player3 from '../assets/players/player_3.png';
import player4 from '../assets/players/player_4.png';
import player5 from '../assets/players/player_5.png';
import player6 from '../assets/players/player_6.png';

const ChoosePlayerModal = NiceModal.create(() => {

  const images = [player1, player2, player3, player4, player5, player6];

  const modal = useModal();

  const ModalTitle = () => {
    return (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <span>Choose <b>your Player</b></span>
      </div>
    );
  };

  const ModalFooter = () => {
    return (
      <div className="modal-footer-container">
        <Button style={{backgroundColor: '#7749F8'}} label='Save Changes' />
      </div>
    );
  };

  return (
    <Modal
      title={<ModalTitle />}
      onOk={() => modal.hide()}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
      footer={<ModalFooter />}
    >
      <div className="image-container">
      {images.map((image, index) => (
        <img className="playerImage" key={index} src={image} alt={`Player ${index + 1}`} />
      ))}
    </div>
    </Modal>
  );
});

export default ChoosePlayerModal;
