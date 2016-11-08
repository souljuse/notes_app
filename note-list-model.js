(function(exports){

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.addItem = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  };

  NoteList.prototype.readNotes = function () {
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.addItem = this.addItem;
  exports.readNotes = this.readNotes;
})(this);
