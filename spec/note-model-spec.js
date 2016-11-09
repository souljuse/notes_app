"use strict";

var note = new Note("test start text", 0);

function testTextStoredInNote() {
  if (note.returnText() !== "test start text") {
    throw new Error("Text not stored correctly");
  } else {
    console.log(".")
  };
}

function testNoteHasAnId() {
  if (note.id !== 0) {
    throw new Error("Note does not have an ID");
  } else {
    console.log(".")
  };
}

testTextStoredInNote()
