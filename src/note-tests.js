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
    if(!Array.isArray(container)) {
      throw new Error(container + ' is not an array.  Oops.');
    }
    if(container.includes(contained)) {
      console.log("It passed! You guys rock!");
    } else
      throw new Error("Unlucky! " + container + " did not contain " + contained);
  }
};

var observe = {
  toChange: function(testedFunction, array, number) {
    initialLength = array.length;
    testedFunction();
    if(array.length - initialLength === number) {
      console.log('Sweet. Your array was changed by ' + number);
    } else if(!Array.isArray(array)) {
      throw new Error(array + ' is not an array.  Oops.');
    } else {
      console.log('Dang. ' + array + 'was not changed');
    }
  }
};

(function(exports) {

function testNoteHasText() {

  var note = new Note("Hello!");
  assert.toEqual(note.showText(), "Hello!");
}

exports.testNoteHasText = testNoteHasText;

})(this);

(function(exports) {

  function testCreateNote() {

    var noteList = new NoteList();
    noteList.createNote("Howdy!");
    assert.toEqual(noteList._notes.length, 1);
  }

  exports.testCreateNote = testCreateNote;

})(this);

(function(exports) {

  function testShowNotes() {

    var noteList = new NoteList();
    noteList.createNote("Howdy!");
    noteList.createNote("Bye now!");
    assert.toEqual(noteList.showNotes().length, 2);
  }

  exports.testShowNotes = testShowNotes;

})(this);
