testNoteHasText();
testCreateNote();
testShowNotes();
testMakeList();
testMakeListForEmptyList();
testMakeListForMultipleNotes();

var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteController.addNote('Woohoo');
noteController.makeView();
