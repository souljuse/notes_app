"use strict";



function testNoteListViewReturnsHTMLForMutlipleNotes() {

  var noteList1 = new NoteList;
  var noteListView1 = new NoteListView(noteList1);

  noteList1.addNote("test text");
  noteList1.addNote("more test text");

  if (noteListView1.convertNotesToHTML() !== "<div><ul><li><a href='#0'>0. test text</a></li><li><a href='#1'>1. more test text</a></li></ul></div>")  {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

function testNoteListViewReturnsHTMLForOneNote() {

  var noteList2 = new NoteList;
  var noteListView2 = new NoteListView(noteList2);

  noteList2.addNote("test text");

  if (noteListView2.convertNotesToHTML() !== "<div><ul><li><a href='#0'>0. test text</a></li></ul></div>")  {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

function testNoteListViewReturnsHTMLForNoNotes() {

  var noteList3 = new NoteList;
  var noteListView3 = new NoteListView(noteList3);

  if (noteListView3.convertNotesToHTML() !== "<div><ul></ul></div>")  {
    throw new Error("FAIL!!");
  } else {
    console.log(".")
  };
}

function testNoteListViewRestrictsNumberOfCharacters() {

  var noteList= new NoteList;
  var noteListView = new NoteListView(noteList);

  noteList.addNote("123456789012345678901");

  if (noteListView.convertNotesToHTML() !== "<div><ul><li><a href='#0'>0. 12345678901234567890</a></li></ul></div>")  {
    throw new Error("FAIL!! Expected <div><ul><li>0. 12345678901234567890</li></ul></div>, but got" + noteListView.convertNotesToHTML() );
  } else {
    console.log(".")
  };
}


testNoteListViewReturnsHTMLForMutlipleNotes();
testNoteListViewReturnsHTMLForOneNote();
testNoteListViewReturnsHTMLForNoNotes();
testNoteListViewRestrictsNumberOfCharacters();
