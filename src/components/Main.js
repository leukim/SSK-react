require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import BoardComponent from './BoardComponent';
import RightColumnComponent from './RightColumnComponent';

import Board from '../models/Board'

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      board: new Board(),
      wordList: [
        {text: 'test', position: 'H7'},
        {text: 'second', position: '9H'}
      ]
    };
    this.state.board.addWord(this.state.wordList[0]);
    this.state.board.addWord(this.state.wordList[1]);
  }

  onHoverWord(word) {
    this.state.board.addHighlight(word);
    this.setState(this.state);
  }

  onRemoveHoverWord() {
    this.state.board.resetHightlight();
    this.setState(this.state);
  }

  onClickCell(name) {
    this.state.board.onClickCell(name);
    this.setState(this.state);
  }

  onAddWord(wordText) {
    var word = this.state.board.addAtSelection(wordText);
    this.state.wordList.push(word);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="ssk">
        <div className="body">
          <BoardComponent rows={this.state.board.getRows()} onClickCell={this.onClickCell.bind(this)} />
          <RightColumnComponent wordList={this.state.wordList}
                                onHoverWord={this.onHoverWord.bind(this)}
                                onRemoveHoverWord={this.onRemoveHoverWord.bind(this)}
                                onAddWord={this.onAddWord.bind(this)}/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
