(function(exports) {

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.changeText = function () {
    appDiv = document.getElementById("app")
    this._conversion()
    appDiv.innerHTML = notelistview.convertedHTMLString;
  };

  NoteController.prototype._conversion = function () {
    notelist.convertToString()
    notelistview.convertToHtml(notelist);
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    // document
    //       .getElementById("note-list")
    //       .addEventListener("click", this.showNoteForCurrentPage());

    window.addEventListener("hashchange", this.showNoteForCurrentPage());
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    var noteId = this.getNoteFromUrl(window.location);
    this.showNote(noteId);
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function(id) {
    var noteToBeDisplayed = this.notelist.notes[id].text();
    document
      .getElementById("app")
      .innerHTML = noteToBeDisplayed;


  };

  exports.NoteController = NoteController;
})(this);

  // function getNoteFromUrl(location){
  //   location.hash.split("#")[1];
  // };
