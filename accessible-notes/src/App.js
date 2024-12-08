import React, { useState } from "react";
import NoteInput from "./components/noteInput/NoteInput";
import NoteList from "./components/noteList/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [isAccessibleMode, setIsAccessibleMode] = useState(false); // Beheert of de toegankelijkheidsmodus aan of uit is

  // Functie om een nieuwe notitie toe te voegen
  const addNote = (newNote) => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        { id: Date.now(), text: newNote.trim(), completed: false },
      ]);
    }
  };

  // Functie om de voltooiing van een notitie te schakelen
  const toggleNoteCompletion = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  // Functie om een notitie te verwijderen
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Functie voor toetsenbordnavigatie (indien toegankelijkheidsmodus is ingeschakeld)
  const handleKeyDown = (e) => {
    if (isAccessibleMode) {
      if (e.key === "Enter") {
        addNote(e.target.value); // Voegt een notitie toe bij indrukken van Enter
      }
      if (e.key === " ") {
        toggleNoteCompletion(e.target.id); // Markeer notitie als voltooid bij spatie
      }
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Accessible Notes App</h1>
        <p>Manage your notes easily and inclusively!</p>
        <button
          onClick={() => setIsAccessibleMode(!isAccessibleMode)}
          aria-label="Toggle accessibility mode"
        >
          {isAccessibleMode ? "Disable Accessibility Mode" : "Enable Accessibility Mode"}
        </button>
      </header>
      <main>
        <NoteInput addNote={addNote} handleKeyDown={handleKeyDown} />
        <section aria-live="polite" role="status">
          <NoteList
            notes={notes}
            toggleNoteCompletion={toggleNoteCompletion}
            deleteNote={deleteNote}
            isAccessibleMode={isAccessibleMode}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
