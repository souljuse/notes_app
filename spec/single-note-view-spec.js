describe('SingleNoteVew', function() {

  it('should convert a note string to html', function(){
    var note = new Note("I like cheese")
    var singlenoteview = new SingleNoteView(note);
    singlenoteview.convertNoteToHtml();
    expect(singlenoteview.convertedHTMLNote).toEqual("<div id='single-note'>I like cheese</div>");
  });

});
