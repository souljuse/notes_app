describe('Note', function(){

  it('can set a text on initialization', function(){
    var text = "My Favourite language is JavaScript";
    var note = new Note(text);
    expect(note.text()).toEqual(text);
  });
  it('a note has a single id', function(){
    var id = 1;
    var text = "My Favourite language is Swift"
    var note = new Note(text, id)
    expect(note.id()).toEqual(id);
  });

});
