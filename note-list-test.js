
function testNoteListModeladdNewNote() {
  var noteList = new NoteList();
  noteList.addItem("Ciao");

  if (noteList.notes[0].getText() !== "Ciao") {
    throw new Error("Incorrect!");
  } else {
    console.log("Way to go!");
  }
};

testNoteListModelInstantiation();
