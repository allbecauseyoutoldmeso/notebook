var assert = {

  toEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Error: expected " + expected + ", got " + actual);
    } else
      console.log("It passed! You guys are awesome!");
  }
};

var check = {
  toInclude: function(container, contained) {
    if(container.includes(contained)) {
      console.log("It passed! You guys rock!");
    } else {
      throw new Error("Unlucky! " + container + " did not contain " + contained);
    }
  }
};

(function(exports) {

  function testNoteHasText() {
    var note = new Note("Hello!");
    assert.toEqual(note.showText(), "Hello!");
  }

  function testShowNotes() {
    var noteList = new NoteList();
    noteList.createNote("Bye now!");
    assert.toEqual(noteList.showNotes().length, 1);
  }

  function testCreateNote() {
    var noteList = new NoteList();
    noteList.createNote("Howdy!");
    assert.toEqual(noteList._notes.length, 1);
  }

  function testMakeList() {
    var noteList = new NoteList();
    noteList.createNote('my note');
    var noteListView = new NoteListView(noteList);
    assert.toEqual(noteListView.makeList(), '<ul><li><div>my note</div></li></ul>');
  }

  function testMakeListForEmptyList() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.toEqual(noteListView.makeList(), '<ul></ul>');
  }

  function testMakeListForMultipleNotes() {
    var noteList = new NoteList();
    noteList.createNote('my note');
    noteList.createNote('another note');
    var noteListView = new NoteListView(noteList);
    assert.toEqual(noteListView.makeList(), '<ul><li><div>my note</div></li><li><div>another note</div></li></ul>');
  }

  exports.testMakeListForMultipleNotes = testMakeListForMultipleNotes;
  exports.testMakeListForEmptyList = testMakeListForEmptyList;
  exports.testMakeList = testMakeList;
  exports.testNoteHasText = testNoteHasText;
  exports.testCreateNote = testCreateNote;
  exports.testShowNotes = testShowNotes;
})(this);
