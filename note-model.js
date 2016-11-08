
function Note(string) {
  var note = {};
  var text = string;

  note.getText = function () {
    return text;
  };
  return note;
};

var n = Note("My favourite language is JavaScript");

  function testTextofANoteUponInstantiation() {
    var n = Note("My favourite language is JavaScript");
    if (n.getText() !== "My favourite language is JavaScript") {
      throw new Error("Incorrect!");
    } else {
      console.log("Correct!");
    }
  };

  testTextofANoteUponInstantiation();
