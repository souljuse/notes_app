"use strict";

var noteList = new NoteList;

function testReturnNoteModels() {

  noteList.addNote("test text");
  noteList.addNote("more test text");

  var a = note.returnNotes();

  if ((a[0].returnText() !== "test text") && (a[1].returnText() !== "more test text")) {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

testReturnNoteModels()
