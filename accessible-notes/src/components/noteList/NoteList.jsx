import React from "react";
import NoteItem from "./../noteItem/NoteItem";

function NoteList({ notes, toggleNoteCompletion, deleteNote }) {
  return (
    <ul aria-live="polite" role="list" aria-labelledby="note-list-title">
      <h2 id="note-list-title" className="sr-only">
        List of notes
      </h2>
      {notes.length === 0 ? (
        <li>No notes available. Add a new note to get started!</li>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            toggleNoteCompletion={toggleNoteCompletion}
            deleteNote={deleteNote}
            aria-label={`Note ${note.completed ? "completed" : "not completed"}: ${note.text}`}
          />
        ))
      )}
    </ul>
  );
}

export default NoteList;
