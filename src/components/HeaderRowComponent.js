require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import CellComponent from './CellComponent'

class HeaderRowComponent extends React.Component {
  render() {
    const numbersRow = [];
    for (var i = 1; i < 16; i++) {
      numbersRow[i] = {letter: i}
    }
    
    const cells = numbersRow.map((cell, index) => {
      return <CellComponent key={index} cell={cell} />
    });

    return (
      <div className="header-row">
        {cells}
      </div>
    );
  }
}

export default HeaderRowComponent;
