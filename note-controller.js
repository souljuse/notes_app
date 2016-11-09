(function(exports) {

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.changeText = function () {
    appDiv = document.getElementById("app")
    this._conversion()
    for(var i = 0; i < notelist.notes.length; i++){
      appDiv.innerHTML += notelistview.converted[i];
    }
  };

  NoteController.prototype._conversion = function () {
    notelist.convertToString()
    notelistview.convertToHtml(notelist);
  };

  exports.NoteController = NoteController;
})(this);
