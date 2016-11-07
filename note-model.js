'use strict';

function Note() {
}

Note.prototype.text = function() {
  return "My favourite language is JavaScript"
}

function testTextofANoteUponInstantiation() {
  var note = new Note("My favourite language is JavaScript");

  if (note.text()!== "My favourite language is JavaScript") {
    throw new Error("Incorrect!");
  }
};

testTextofANoteUponInstantiation();
