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
  convertToString(this);
};

NoteList.prototype.showNotes = function () {
  for (var i = 0; i < this.notes.length; i++){
    return this.notes[i].string;
  }
};

function convertToString(shish) {
  var item = shish.notes[shish.notes.length - 1].string;
  shish.noteStrings.push(item);
};


  exports.NoteList = NoteList;
 })(this);
