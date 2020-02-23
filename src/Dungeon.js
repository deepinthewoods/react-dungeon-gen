import React from 'react';
import DungeonSettings from './DungeonSettings.js';
import DungeonDisplay from './DungeonDisplay.js';

class Dungeon extends React.Component{
  render(){
    return (<div>
    <DungeonSettings/>
    <DungeonDisplay/>
    </div>)
  }
}

export default Dungeon;
