(function(exports) {

  function NoteListView() {
    // this.notelist = notelist;
    this.converted = [];
    this.convertedHTMLString = "";

  }

  NoteListView.prototype.convertToHtml = function (notelist) {
    this.converted = [];
    if (notelist.notes.length > 0){
      for (var i = 0; i < notelist.noteStrings.length; i++){

        var html = "<li class='list-item'><div><a href='#"+ notelist.notes[i].id() +"'>"  + notelist.noteStrings[i].slice(0,20) + "</a></div></li>";
        this.converted.push(html);
      }
      this.convertedHTMLString = "<ul id='note-list'>" + this.converted.join("") + "</ul>"
    } else if (this.notelist.notes.length === 0){
      return "You have no notes to convert."
    }
  };

  exports.NoteListView = NoteListView;
})(this);
