describe('Note', function(){

  it('can set a text on initialization', function(){
    var text = "My Favourite language is JavaScript";
    var note = new Note(text);
    expect(note.text()).toEqual(text);
  });

})
