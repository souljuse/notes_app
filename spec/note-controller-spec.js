
function testDisplaysHTML() {

  var noteList = new NoteList;
  var noteController = new NoteListController(noteList);

  noteList.addNote("Favourite drink: seltzer");
  noteController.insertNoteViewHTML();

  if (document.getElementById("app").textContent !== "0. Favourite drink: sel") {
    throw new Error("FAIL!! Got " + document.getElementById("app").textContent);
  } else {
    console.log(".")
  };
}

testDisplaysHTML()
