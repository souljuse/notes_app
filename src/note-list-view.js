"use strict";

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.convertNotesToHTML = function() {
    var notesArray = this.noteList.returnNotes();
    var textArray = [];

    for (var i=0; i < notesArray.length; i++) {
      var id = notesArray[i].returnNoteId()
      var text = notesArray[i].returnText().slice(0,20);
      textArray.push("<li><a href='#" + id + "'>" + id + ". " + text + "</a></li>");
    }
    return "<div><ul>" + textArray.join("") + "</ul></div>"
  };

  exports.NoteListView = NoteListView;

})(this);
