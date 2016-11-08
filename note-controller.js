"use strict";

(function(exports) {
  function NoteListController(noteList) {
    this.noteList = noteList;
  };

  NoteListController.prototype.insertNoteViewHTML = function() {
    var noteListView = new NoteListView(noteList);
    var notesHTML = noteListView.convertNotesToHTML();
    document.getElementById("app").innerHTML = notesHTML;
  };

  exports.NoteListController = NoteListController;

})(this);











//
//
// var element = document.getElementById("app").innerHTML;
//
// function changeHTMLText(id, string) {
//    document.getElementById(id).innerHTML = string;
// }
//
//
//  console.log(document.getElementById("app").innerHTML);
//
//  changeHTMLText("app", "Howdy");
//
//  console.log(document.getElementById("app").innerHTML);
