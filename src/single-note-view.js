(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
    this.convertedHTMLNote = "";
  }

  SingleNoteView.prototype.convertNoteToHtml = function () {
      this.convertedHTMLNote = "<div id='single-note'>" + this.note.text() + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
