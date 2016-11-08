"use strict";

var noteListTest = new NoteList;

function testReturnNoteModels() {

  noteListTest.addNote("test text");
  noteListTest.addNote("more test text");

  var a = noteListTest.returnNotes();

  if ((a[0].returnText() !== "test text") && (a[1].returnText() !== "more test text")) {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

testReturnNoteModels()
