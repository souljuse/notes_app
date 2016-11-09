(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
    this.converted = [];
  }

  NoteListView.prototype.convertToHtml = function (notelist) {
    if (this.notelist.notes.length > 0){
      for (var i = 0; i < this.notelist.noteStrings.length; i++){
        var html = "<ul><li><div> " + this.notelist.noteStrings[i] + " </div></li></ul>";
        this.converted.push(html);
      }
    } else if (this.notelist.notes.length === 0){
      return "You have no notes to convert."
    }
  };

  exports.NoteListView = NoteListView;
})(this);
