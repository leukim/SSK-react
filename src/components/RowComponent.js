require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import CellComponent from './CellComponent'

class RowComponent extends React.Component {
  render() {
    const cells = this.props.cells.map((cell, index) => {
      return <CellComponent {...this.props} key={index} cell={cell} />
    });

    return (
      <div className="row">
        <div className="row-header">{this.props.header}</div>
        <div className="row-content">
          {cells}
        </div>
      </div>
    );
  }
}

export default RowComponent;
