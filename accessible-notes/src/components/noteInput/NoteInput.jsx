import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  
  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };

  
  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote(newNote);
      setNewNote("");
      document.getElementById("note-input").focus(); 
    }
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNote();
    }
  };

  return (
    <div>
      <label htmlFor="note-input" className="sr-only">
        Enter your note
      </label>
      <input
        id="note-input"
        type="text"
        value={newNote}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} 
        placeholder="Type your note here"
        aria-label="Enter your note"
        aria-required="true" 
        aria-describedby="note-input-helper" 
      />
      <p id="note-input-helper" className="sr-only">
        Type your note in the input field and press Enter or click Add Note to save.
      </p>
      <button
        onClick={handleAddNote}
        aria-label="Add new note"
        disabled={!newNote.trim()} 
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteInput;
