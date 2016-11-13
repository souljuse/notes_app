(function(exports) {

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.changeText = function () {
    notelistview.convertToHtml(this.notelist);
    document.getElementById("app").innerHTML = notelistview.convertedHTMLString;
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

  // NoteController.prototype.submitNewNoteWhenButtonClicked = function(){
  //   console.log(this)
  //   document.getElementById("create-note-button")
  //   .addEventListener("click", function(evt) {
  //
  //     evt.preventDefault();
  //     var text = document.getElementById("text").value;
  //     submitNote(text);
  //   });
  // };


  exports.NoteController = NoteController;
})(this);

// function submitNote(text){
//   var newNote = new Note(text);
//   noteList.addNote(text);
// }

  // function getNoteFromUrl(location){
  //   location.hash.split("#")[1];
  // };

// function clickButton(){
//   document
//         .getElementById("create-note-button")
//         .addEventListener("click", this.createNote, false);
// }
