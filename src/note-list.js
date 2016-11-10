(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteStrings = [];
    this.noteIndex = 0;
  }

NoteList.prototype.addNote = function (note) {
  note.number = this.noteIndex
  this.notes.push(note)
  this.noteIndex ++;
};

NoteList.prototype.showNotes = function () {
  for (var i = 0; i < this.notes.length; i++){
    return this.notes[i].string;
  }
};

NoteList.prototype.convertToString = function () {
  for (var i = 0; i < this.notes.length; i++){
    var item = this.notes[i].string;
    this.noteStrings.push(item);
  }
};


  exports.NoteList = NoteList;
 })(this);
