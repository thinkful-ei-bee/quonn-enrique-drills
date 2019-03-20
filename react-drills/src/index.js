import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './index.css';

ReactDOM.render(<div><HelloWorld /> <Bomb /> <RouletteGun bulletInChamber ={8} /> </div>
    , document.getElementById('root'));