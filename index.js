
var noteList = new NoteList;
var noteListController = new NoteListController(noteList);

noteList.addNote("Favourite drink: seltzer");

noteListController.insertNoteViewHTML();
