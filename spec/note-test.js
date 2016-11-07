// 'use strict


function testTextofANoteUponInstantiation() {
  var note = new Note();
  var text = "Javascript is a wonderful language and the easiest to learn and ;everybody loves it.";
  note.text = text;

  if (note.text !== text) {
    throw new Error("Incorrect!");
  }
}

testTextofANoteUponInstantiation();
