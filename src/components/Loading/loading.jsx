import React from 'react';
import loadergif from '../Loading/loader.gif';
import pinkgif from '../Loading/pink.gif';
import './loading.css';

export default function LOADER(props) {
  return (
    <div class="load">
      <img src={pinkgif} alt="loader" />
    </div>
  );
}
