
function testDisplaysNote() {
  var note = new Note("Favourite drink: seltzer", 0)
  var singleNote = new SingleNoteView(note);
  singleNote.createNoteView();
  if (singleNote.noteView !== "<div>Favourite drink: seltzer</div>") {
    throw new Error("FAIL!! Got " + singleNote.noteView);
  } else {
    console.log(".")
  };


  //
  // if (document.getElementById("app").textContent !== "Favourite drink: seltzer") {
  //   throw new Error("FAIL!! Got " + document.getElementById("app").textContent);
  // } else {
  //   console.log(".")
  // };
}

testDisplaysNote()
