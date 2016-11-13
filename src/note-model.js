(function(exports){

  function Note(text, id){
    this.string = text;
    this.number = id;
  }

  Note.prototype.text = function(){
    return this.string;
  }
  Note.prototype.id = function() {
    return this.number;
  }


  exports.Note = Note;

})(this)
