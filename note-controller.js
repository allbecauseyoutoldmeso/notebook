(function (exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
  }

  NoteController.prototype.addNote = function(text) {
    this._noteList.createNote(text);
  };

  NoteController.prototype.makeView = function() {
    this._noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.writeNotes = function() {
    var elem = document.getElementById('greeting');
    elem.innerHTML = this._noteListView.makeList();
  };

  exports.NoteController = NoteController;
})(this);
