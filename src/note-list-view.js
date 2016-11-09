"use strict";

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.convertNotesToHTML = function() {
    var notesArray = this.noteList.returnNotes();
    var textArray = [];

    for (var i=0; i < notesArray.length; i++) {
      var text = notesArray[i].returnText().slice(0,20);
      textArray.push(i + ". " + text);
    }
    return "<ul><li><div>" + textArray.join("</div></li><li><div>") + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;

})(this);
