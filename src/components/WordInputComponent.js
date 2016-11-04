require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class WordInputComponent extends React.Component {

  onKeyPress(e) {
    if(e.key == 'Enter'){
      this.props.onAddWord(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="word-input">
        <input type="text" placeholder="New word" onKeyPress={this.onKeyPress.bind(this)} />
      </div>
    );
  }
}

export default WordInputComponent;
