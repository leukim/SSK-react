class Board {

  constructor() {
    this.specialCells = {
      tripleWord: ['A1', 'A8', 'A15', 'H1', 'H15', 'O1', 'O8', 'O15'],
      doubleWord: ['B2', 'B14', 'C3', 'C13', 'D4', 'D12', 'E5', 'E11', 'H8',
                   'K5', 'K11', 'L4', 'L12', 'M3', 'M13', 'N2', 'N14'],
      tripleLetter: ['B6', 'B10', 'F2', 'F6', 'F10', 'F14', 'J2', 'J6', 'J10', 'J14', 'N6', 'N10'],
      doubleLetter: ['A4', 'A12', 'C7', 'C9', 'D1', 'D8', 'D15', 'G3', 'G7', 'G9', 'G13',
                     'H4', 'H12', 'I3', 'I7', 'I9', 'I13', 'L1', 'L8', 'L15', 'M7', 'M9', 'O4', 'O12']
    };

    this.rows = [];
    var header = 'A';
    for (var i = 0; i < 15; ++i) {
      this.rows[i] = {
        header: header,
        cells: []
      };

      for (var j = 0; j < 15; ++j) {
        this.rows[i].cells[j] = {name: header + (j + 1), nameVert: (j + 1), letter: '', cellClass: this.getCellClass(header + (j + 1)),
                                 highlighted: false, selected: 'none'};
      }

      header = String.fromCharCode(header.charCodeAt(0) + 1);
    }

    this.selected = null;
  }

  getCellClass(name) {
    if (this.specialCells.tripleWord.indexOf(name) > -1) {
      return 'tw';
    }
    if (this.specialCells.doubleWord.indexOf(name) > -1) {
      return 'dw';
    }
    if (this.specialCells.tripleLetter.indexOf(name) > -1) {
      return 'tl';
    }
    if (this.specialCells.doubleLetter.indexOf(name) > -1) {
      return 'dl';
    }
    return '';
  }

  getRows() { return this.rows;}

  addWord(word) {
    var cell = this.getCellIndices(word.position);

    if (this.isVertical(word.position)) {
      for (var i = 0; i < word.text.length; ++i) {
        this.rows[cell.row + i].cells[cell.col].letter = word.text[i];
      }
    } else {
      for (var i = 0; i < word.text.length; ++i) {
        this.rows[cell.row].cells[cell.col + i].letter = word.text[i];
      }
    }
  }

  isVertical(name) {
    return name.charAt(0) >= '0'.charAt(0) && name.charAt(0) <= '9';
  }

  getCellIndices(name) {
    var row, col;
    if (this.isVertical(name)) {
      if (name.length == 2) {
        col = name.slice(0, 1);
        row = name.slice(1);
      } else {
        col = name.slice(0, 2);
        row = name.slice(2)
      }
    } else {
      if (name.length == 2) {
        row = name.slice(0, 1);
        col = name.slice(1);
      } else {
        row = name.slice(0, 1);
        col = name.slice(1);
      }
    }

    row = row.charCodeAt(0) - 'A'.charCodeAt(0);
    col -= 1;

    return {row: row, col: col};
  }

  addHighlight(word) {
    var name = word.text;
    var length = name.length;
    var cell = this.getCellIndices(word.position);

    if (this.isVertical(word.position)) {
      for (var i = 0; i < length; ++i) {
        this.rows[cell.row + i].cells[cell.col].highlighted = true;
      }
    } else {
      for (var i = 0; i < length; ++i) {
        this.rows[cell.row].cells[cell.col + i].highlighted = true;
      }
    }
  }

  resetHightlight() {
    for (var i = 0; i < this.rows.length; ++i) {
      for (var j = 0; j < this.rows[i].cells.length; ++j) {
        this.rows[i].cells[j].highlighted = false;
      }
    }
  }

  onClickCell(name) {
    var cell = this.getCellIndices(name);

    if (name == this.selected) {
      if (this.rows[cell.row].cells[cell.col].selected == 'horizontal') {
        this.rows[cell.row].cells[cell.col].selected = 'vertical';
        var row = this.selected.slice(0, 1);
        var col = this.selected.slice(1);
        this.selected = col + row;
      } else {
        this.selected = null;
        this.rows[cell.row].cells[cell.col].selected = 'none';
      }
    } else {
      if (this.selected) {
        var selectedCell = this.getCellIndices(this.selected);
        this.rows[selectedCell.row].cells[selectedCell.col].selected = 'none';
      }
      this.selected = name;
      this.rows[cell.row].cells[cell.col].selected = 'horizontal';
    }
  }

  addAtSelection(wordText) {
    var word = {text: wordText, position:this.selected};
    this.addWord(word);

    var cell = this.getCellIndices(this.selected);
    this.rows[cell.row].cells[cell.col].selected = 'none';
    this.selected = null;

    return word;
  }
}

export default Board;
