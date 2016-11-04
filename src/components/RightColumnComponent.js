require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import WordInputComponent from './WordInputComponent'
import WordListComponent from './WordListComponent';

class RightColumnComponent extends React.Component {

  render() {
    return (
      <div className="right-column">
        <WordInputComponent {...this.props} />
        <WordListComponent {...this.props} wordList={this.props.wordList} />
      </div>
    );
  }
}

export default RightColumnComponent;
