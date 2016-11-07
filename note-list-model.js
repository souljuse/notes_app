'use strict';

function NoteList() {
  this.list = [];
}

NoteList.prototype.addtext = function() {
  this.list.push("My favourite drink is seltzer")
}

NoteList.prototype.text = function() {
  return "My favourite drink is seltzer"
}


function testNoteListModelInstantiation() {
  var noteList = new NoteList ("My favourite drink is seltzer");

  if (noteList.text()!== "My favourite drink is seltzer") {
    throw new Error("Incorrect!");
  }

};

function testNoteIsAddedToArray() {
  var noteList = new NoteList ("My favourite drink is seltzer");
  if(noteList.addtext() !== "My favourite drink is seltzer") {
    throw new Error("Wrong Array!");

  };
}

testNoteListModelInstantiation();
testNoteIsAddedToArray();
