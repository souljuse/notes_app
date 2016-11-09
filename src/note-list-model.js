"use strict";

(function(exports) {
  function NoteList() {
    this.listOfNotes = []
    this.index = 0
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text, this.index);
    this.listOfNotes.push(note)
    this.index++ 
  };

  NoteList.prototype.returnNotes = function(){
    return this.listOfNotes;
  };

  exports.NoteList = NoteList;

})(this);
