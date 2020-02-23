import React from 'react';
import GridBlock from './GridBlock.js';
class DungeonDisplay extends React.Component{

  render(){
    let grid = [];
    for (let i = 0; i < GRID_WIDTH; i++)
      for (let j = 0; j < GRID_HEIGHT; j++){
        grid.push(<GridBlock/>);
      }

    return grid;
  }
}

export default DungeonDisplay;
