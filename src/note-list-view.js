(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype.makeList = function() {
    var string = '';
    this._noteList.showNotes().forEach(function(note) {
      string = (string + '<li><div>' + note.showText() + '</div></li>');
    });
    return '<ul>' + string + '</ul>';
  };

  exports.NoteListView = NoteListView;
})(this);
