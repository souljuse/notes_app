
function testDisplaysNote() {
  var note = new Note("Favourite drink: seltzer")
  var singleNote = new SingleNoteView(note);

  if (singleNote.noteView !== "Favourite drink: seltzer") {
    throw new Error("FAIL!! Got " + singleNote.noteView);
  } else {
    console.log(".")
  };

  if (document.getElementById("app").textContent !== "Favourite drink: seltzer") {
    throw new Error("FAIL!! Got " + document.getElementById("app").textContent);
  } else {
    console.log(".")
  };
}

testDisplaysNote()
