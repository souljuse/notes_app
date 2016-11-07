'use strict';

function NoteList() {
  this.list = [];
}

NoteList.prototype.text = function() {
  return "My favourite drink is seltzer";
}

NoteList.prototype.addItem = function() {
  return this.list.push("My favourite drink is seltzer");
}

function testNoteListModelInstantiation() {
  var noteList = new NoteList ("My favourite drink is seltzer");
  if (noteList.text()!== "My favourite drink is seltzer") {
    throw new Error("Incorrect!");
  }
};

function testNoteIsAddedToArray() {
  var noteList = new NoteList ("My favourite drink is seltzer");
  // console.log(noteList);
  // console.log(noteList.text());
  // console.log(noteList.addItem());
  // console.log(noteList.addItem());
  // console.log(noteList.addItem());
  // console.log(noteList.addItem());
  // console.log(noteList.list);
  noteList.addItem();
  if (noteList.list[0] !== "My favourite drink is seltzer") {
    throw new Error("Wrong Array!");
  }
}

testNoteListModelInstantiation();
testNoteIsAddedToArray();
