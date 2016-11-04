require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import WordComponent from './WordComponent'

class WordListComponent extends React.Component {
  
  render() {
    const list = this.props.wordList.map((word, index) => {
      return <WordComponent key={index} word={word} {...this.props} />
    });

    return (
      <ul className="word-list">
        {list}
      </ul>
    );
  }
}

export default WordListComponent;
