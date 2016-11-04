require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class WordComponent extends React.Component {

  onHover() {
    this.props.onHoverWord(this.props.word);
  }

  render() {
    return (
      <li className="word" onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.props.onRemoveHoverWord.bind(this)}>
        <span className="word-text">{this.props.word.text}</span>
        <span className="word-position">{this.props.word.position}</span>
      </li>
    );
  }
}

export default WordComponent;
