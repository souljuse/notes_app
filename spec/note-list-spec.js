describe('NoteList', function(){

  it('should take a note upon instantiation', function(){
    var note = new Note("I like cheese");
    var notelist = new NoteList();
    notelist.addNote(note);
    expect(notelist.showNotes()).toEqual("I like cheese");
  });

  it('should return give an index to a note', function(){
    var note1 = new Note("I like cheese");
    var note2 = new Note("I like more cheese");
    var notelist = new NoteList();
    notelist.addNote(note1);
    notelist.addNote(note2);
    expect(note1.id()).toEqual(0);
    expect(note2.id()).toEqual(1);
  });

})
