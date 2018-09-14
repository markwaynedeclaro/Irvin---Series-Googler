import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Expand from './../../assets/plus.png';
import './index.css';

const Episodes = (props) => {
  return (
    <div className="openPopup">
      <img src={Expand} alt="{Browse Episodes" />
      View Episodes
    </div>
  );
}

export default Episodes;
