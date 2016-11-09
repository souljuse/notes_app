"use strict";



function testNoteListViewReturnsHTMLForMutlipleNotes() {

  var noteList1 = new NoteList;
  var noteListView1 = new NoteListView(noteList1);

  noteList1.addNote("test text");
  noteList1.addNote("more test text");

  if (noteListView1.convertNotesToHTML() !== "<ul><li><div>test text</div></li><li><div>more test text</div></li></ul>")  {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

function testNoteListViewReturnsHTMLForOneNote() {

  var noteList2 = new NoteList;
  var noteListView2 = new NoteListView(noteList2);

  noteList2.addNote("test text");

  if (noteListView2.convertNotesToHTML() !== "<ul><li><div>test text</div></li></ul>")  {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

function testNoteListViewReturnsHTMLForNoNotes() {

  var noteList3 = new NoteList;
  var noteListView3 = new NoteListView(noteList3);

  if (noteListView3.convertNotesToHTML() !== "<ul><li><div></div></li></ul>")  {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

function testNoteListViewReturnsHTMLForOneNote() {

  var noteList= new NoteList;
  var noteListView = new NoteListView(noteList);

  noteList.addNote("123456789012345678901");

  if (noteListView.convertNotesToHTML() !== "<ul><li><div>0. 12345678901234567890</div></li></ul>")  {
    throw new Error("FAIL!! Expected <ul><li><div>0. 12345678901234567890</div></li></ul>, but got" + noteListView.convertNotesToHTML() );
  } else {
    console.log(".")
  };
}



testNoteListViewReturnsHTMLForMutlipleNotes();
testNoteListViewReturnsHTMLForOneNote();
testNoteListViewReturnsHTMLForNoNotes();
