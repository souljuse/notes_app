(function(exports){

  function Note(text){
    this.text = text;
  }

  Note.prototype.getText = function () {
    return this.text;
  };

  exports.Note = Note;
  exports.getText = this.getText;
})(this);
