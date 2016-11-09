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
  // NoteListController.prototype.returnSingleNote = function(id) {
  //   console.log(id)
  //   console.log(this.noteList)
  //   singleNoteView = new SingleNoteView(noteList.listOfNotes[id]);
  //   document
  //   .getElementById("app")
  //   .innerHTML = singleNoteView.createNoteView();
  // };

  exports.NoteListController = NoteListController;

})(this);

var noteList = new NoteList;
var noteListController = new NoteListController(noteList);

noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite animal: Meercat");
console.log(note)

noteListController.insertNoteViewHTML();


function updateURL() {
    window.addEventListener("hashchange", setsUpNoteAndId);
  };

  function testFunction(){
    console.log("It's working")
  };

  function setsUpNoteAndId() {
      returnSingleNote(getNoteIdFromUrl(window.location));
    };

  function getNoteIdFromUrl(location) {
      return location.hash.split("#")[1];
    };

    function returnSingleNote(id) {
      console.log(id)
      console.log(noteList)
    singleNoteView = new SingleNoteView(noteList.listOfNotes[id]);
     document
       .getElementById("app")
       .innerHTML = singleNoteView.createNoteView();
   };

   updateURL()













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
