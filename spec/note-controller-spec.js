describe('Controller', function(){

  it('display just the first 20 characters of each note on the main note list page', function(){
    var note = new Note("I like cheese")
    var note2 = new Note("Cake is good too")
    var notelist = new NoteList();
    notelist.addNote(note);
    notelist.addNote(note2);
    notelist.convertToString();
    var notelistview = new NoteListView(notelist);
    notelistview.convertToHtml(notelist);
    expect(document.getElementsByClassName("list-item")[0].textContent).toEqual("Favourite Drink: sel");
  });

})
