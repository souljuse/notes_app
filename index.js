notelist = new NoteList()
noteController = new NoteController(notelist)
note1 = new Note("Favourite Drink: seltzer")
note2 = new Note("Favourite Pudding: Carrot Cake")
noteController.notelist.addNote(note1)
noteController.notelist.addNote(note2)
notelistview = new NoteListView()
noteController.changeText()
// document.getElementById("create-note").addEventListener("click", noteController.makeUrlChangeShowNoteForCurrentPage());
// noteController.makeUrlChangeShowNoteForCurrentPage();
document.getElementById("create-note-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  var text = document.getElementById("text").value;
  var newNote = new Note(text);
  notelist.addNote(newNote);
  noteController.changeText()
});
document.addEventListener("hashchange", noteController.makeUrlChangeShowNoteForCurrentPage());

function newNote(text){
  // var newNote = new Note(text);
  // notelist.addNote(newNote);
  // console.log(notelist.noteStrings[3])
}

// window.addEventListener("hashchange", function() {
//
//   var xhr = new XMLHttpRequest();
//
//   // xhr.open('GET', 'noteController.');
//   xhr.onload = function() {
//       if (xhr.status === 200) {
//            console.log("?!")
//            noteController.makeUrlChangeShowNoteForCurrentPage()
//          }
//          else if (xmlhttp.status == 400) {
//             alert('There was an error 400');
//          }
//          else {
//              alert('something else other than 200 was returned');
//          }
//   }
// console.log(xhr)
// xhr.send();
//
// });
