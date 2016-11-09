"use strict";

(function(exports) {
  function SingleNoteView(note) {
    this.note = note.returnText();
    this.noteView = ""
  };

  SingleNoteView.prototype.createNoteView = function() {
    this.noteView = "<div>" + this.note + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;
  // exports.noteView = noteView;


})(this);
