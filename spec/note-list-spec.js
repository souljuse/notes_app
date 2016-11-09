describe('NoteList', function(){

  it('should take a note upon instantiation', function(){
    var note = new Note("I like cheese");
    var notelist = new NoteList();
    notelist.addNote(note);
    expect(notelist.showNotes()).toEqual("I like cheese");
  });

})
