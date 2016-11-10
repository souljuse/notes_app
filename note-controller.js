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
  
  exports.NoteController = NoteController;
})(this);
