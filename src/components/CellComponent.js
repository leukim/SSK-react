require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import classNames from 'classnames';

class CellComponent extends React.Component {

  onClick() {
    this.props.onClickCell(this.props.cell.name);
  }

  render() {
    var selected = '';
    if (this.props.cell.selected == 'horizontal') {
      selected = <div className='selected-horizontal'></div>
    } else if (this.props.cell.selected == 'vertical') {
      selected = <div className="selected-vertical"></div>
    }
    return (
      <div className={classNames('cell', this.props.cell.cellClass, {'highlighted': this.props.cell.highlighted})}
           onClick={this.onClick.bind(this)}>
        {selected}
        {this.props.cell.letter}
      </div>
    );
  }
}

export default CellComponent;
