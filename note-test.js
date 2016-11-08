// var n = require("./note-model");

function testTextofANoteUponInstantiation() {
  var n = new Note("My favourite language is not JavaScript");
  if (n.getText() !== "My favourite language is not JavaScript") {
    throw new Error("Incorrect!");
  } else {
    console.log("Correct!");
  }
};

testTextofANoteUponInstantiation();
