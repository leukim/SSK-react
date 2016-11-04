require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderRowComponent from './HeaderRowComponent'
import RowComponent from './RowComponent';

class BoardComponent extends React.Component {
  render() {
    const rows = this.props.rows.map((row, index) => {
      return <RowComponent {...this.props} key={index} header={row.header} cells={row.cells} />;
    });

    return (
      <div className="board">
        <HeaderRowComponent />
        <div className="inner-board">
          {rows}
        </div>
      </div>
    );
  }
}

export default BoardComponent;
