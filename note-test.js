require("./note-model")
var getText = require("./note-model").getText;
var note = require("./note-model").Note;

function testTextofANoteUponInstantiation(string) {
  var note = Note(string);
  if (getText() !== "My favourite language is JavaScript") {
    throw new Error("Incorrect!");
  } else {
    console.log("Correct!");
  }
};

testTextofANoteUponInstantiation("My favourite language is JavaScript");
// testTextofANoteUponInstantiation('I really dislike JavaScript!');
