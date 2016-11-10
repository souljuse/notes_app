describe('SingleNoteVew', function() {

  it('should iterate through a list and convert each note string to html', function(){
    var note = new Note("I like cheese")
    var singlenoteview = new SingleNoteView;
    singlenoteview.convertToHtml(note);
    expect(singlenoteview.converted).toEqual("<div> I like cheese </div>");

  });

});
