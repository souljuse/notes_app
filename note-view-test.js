
function testEmptyNoteListView() {
  var noteList = new NoteList();
  var arr = noteList.readNotes();
  var view = new NoteListView(arr);
  view.orderList();

  if (view.length === 0) {
    throw new Error("Incorrect!");
  } else {
    console.log("Way to go!");
  }
};

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addItem("Ciao");
  noteList.addItem("Ciaone");
  var arr = noteList.readNotes();
  var view = new NoteListView(arr);
  view.orderList();

  if (view.noteList[0].text !== "<li><div>Ciao</div></li>") {
    throw new Error("Incorrect!");
  } else {
    console.log("Way to go!");
  }
};

testNoteListView();
testEmptyNoteListView();
