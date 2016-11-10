describe('NoteListView', function(){

  it('should iterate through a list and convert each notes string to html', function(){
    var note = new Note("I like cheese")
    var note2 = new Note("Cake is good too")
    var notelist = new NoteList();
    notelist.addNote(note);
    notelist.addNote(note2);
    notelist.convertToString();
    var notelistview = new NoteListView(notelist);
    notelistview.convertToHtml(notelist);
    expect(notelistview.converted[0]).toEqual("<li><div> I like cheese </div></li>");
    expect(notelistview.converted[1]).toEqual("<li><div> Cake is good too </div></li>");
    expect(notelistview.convertedHTMLString).toEqual("<ul><li><div> I like cheese </div></li><li><div> Cake is good too </div></li></ul>");
  });


  it('should be able to handle no notes', function(){
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    expect(notelistview.convertToHtml()).toEqual("You have no notes to convert.");
  });

})
