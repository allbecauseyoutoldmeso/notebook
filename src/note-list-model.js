(function(exports) {

function NoteList() {
  this._notes = [];
}

NoteList.prototype.createNote = function() {
  note = new Note();
  this._notes.push(note);
};

NoteList.prototype.showNotes = function() {
  return this._notes;
};

  exports.NoteList = NoteList;
})(this);
