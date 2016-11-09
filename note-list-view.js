(function(exports){

  function NoteListView(notelist){
    this.noteList = notelist;
  }

  NoteListView.prototype.orderList = function() {
    for(var i = 0; i < this.noteList.length; i++){
      var str = this.noteList[i].text;
      str = "<li><div>" + str + "</div></li>";
    }
  };

  NoteListView.prototype.readOrderedNotes = function () {
    return this.noteList;
  };

  exports.NoteListView = NoteListView;
  exports.readOrderedNotes = this.readOrderedNotes;
  exports.orderList = this.orderList;
})(this);
