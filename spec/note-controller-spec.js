
function testDisplaysHTML() {

  var noteList = new NoteList;
  var noteController = new NoteListController(noteList);

  noteList.addNote("Favourite drink: seltzer");
  noteController.insertNoteViewHTML();

  if (document.getElementById("app").textContent !== "0. Favourite drink: sel1. Favourite animal: Me") {
    throw new Error("FAIL!! Got " + document.getElementById("app").textContent);
  } else {
    console.log(".")
  };
}

function testDisplaySelectedNote(){
  if (location.hash === "#0") {
    if (document.getElementById("app").textContent !== "Favourite drink: seltzer") {
      throw new Error("FAIL! Expected 'Favourite drink: seltzer', got " + document.getElementById("app").textContent);
    } else {
      console.log(".dadsda")
    };
  };
}

testDisplaysHTML()
testDisplaySelectedNote()
