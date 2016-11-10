notelist = new NoteList()
noteController = new NoteController(notelist)
note = new Note("Favourite Drink: seltzer")
note2 = new Note("Favourite Pudding: Carrot Cake")
noteController.notelist.addNote(note)
noteController.notelist.addNote(note2)
notelistview = new NoteListView(noteController.notelist)
noteController.changeText()
// document.getElementById("create-note").addEventListener("click", noteController.makeUrlChangeShowNoteForCurrentPage());
// noteController.makeUrlChangeShowNoteForCurrentPage();
document.addEventListener("hashchange", noteController.makeUrlChangeShowNoteForCurrentPage());


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
