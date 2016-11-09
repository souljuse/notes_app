(function(exports) {

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.changeText = function () {
    appDiv = document.getElementById("app")

    for(var i = 0; i < notelist.notes.length; i++){
      appDiv.innerHTML += notelist.notes[i].string + "<br>";
    }
  };

  exports.NoteController = NoteController;
})(this);
