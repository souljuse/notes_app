"use strict";

var note = new Note("test start text");

function testTextStoredInNote() {
  if (note.returnText() !== "test start text") {
    throw new Error("Text not stored correctly");
  } else {
    console.log(".")
  };
}

testTextStoredInNote()
