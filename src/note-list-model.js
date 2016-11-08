"use strict";

(function(exports) {
  function NoteList() {
    this.listOfNotes = []
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text);
    this.listOfNotes.push(note)
  };

  NoteList.prototype.returnNotes = function(){
    return this.listOfNotes;
  };

  exports.NoteList = NoteList;

})(this);
