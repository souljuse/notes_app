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

  // NoteListController.prototype.updateURL= function() {
  //   window.addEventListener("hashchange", testFunction);
  // };
  //
  // NoteListController.prototype.testFunction = function(){
  //   console.log("It's working")
  // };
  //
  // NoteListController.prototype.setsUpNoteAndId = function() {
  //   returnSingleNote(getNoteIdFromUrl(window.location));
  // };
  //
  // NoteListController.prototype.getNoteIdFromUrl = function(location) {
  //   return location.hash.split("#")[1];
  // };
  //
  NoteListController.prototype.createView = function(noteList) {
    var id = getNoteIdFromUrl(window.location);
    var singleNoteView = new SingleNoteView(noteList.listOfNotes[id]);
    singleNoteView.createNoteView();
    return singleNoteView.noteView

    // document
    // .getElementById("app")
    // .innerHTML = singleNoteView.createNoteView();
  };

  exports.NoteListController = NoteListController;

})(this);

var noteList = new NoteList;
var noteListController = new NoteListController(noteList);

noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite animal: Meercat");

noteListController.insertNoteViewHTML();
var htmlNote = noteListController.createView(noteList);

function updateURL(notelist) {
    var htmlNote = noteListController.createView(notelist);
    window.addEventListener("hashchange", returnSingleNote(htmlNote));
  };

  function getNoteIdFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function returnSingleNote(html) {
     document
       .getElementById("app")
       .innerHTML = html;
   };

// returnSingleNote(htmlNote)
updateURL(noteList)












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
