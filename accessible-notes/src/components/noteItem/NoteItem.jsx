import React from "react";

function NoteItem({ note, toggleNoteCompletion, deleteNote }) {
  return (
    <li className="note" role="listitem">
      <div>
        {/* Checkbox voor voltooien van notitie */}
        <input
          type="checkbox"
          id={`note-${note.id}`}
          checked={note.completed}
          onChange={() => toggleNoteCompletion(note.id)}
          aria-checked={note.completed}
          aria-label={`Mark note ${note.completed ? "as incomplete" : "as completed"}`}
        />
        <label htmlFor={`note-${note.id}`} tabIndex="0">
          {/* Toon doorgehaalde tekst als de notitie voltooid is */}
          {note.completed ? <del>{note.text}</del> : note.text}
        </label>
      </div>
      <button
        onClick={() => deleteNote(note.id)}
        aria-label={`Delete note: ${note.text}`}
        tabIndex="0"
      >
        Delete
      </button>
    </li>
  );
}

export default NoteItem;
