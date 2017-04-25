function changeText(newText) {
  var elem = document.getElementById('greeting');
  elem.innerHTML = newText;
}

(function (exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
  }

  NoteController.prototype.addNote = function() {
    this._noteList.createNote('Tada!');
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
