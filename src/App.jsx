import { useState, useEffect } from "react";
import "./App.css";

import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    const noteWithId = {
      ...newNote,
      id: Date.now(),
    };

    setNotes((prevNotes) => [noteWithId, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || note.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1>Personal Notes App</h1>

      <NoteForm onAddNote={addNote} />

      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <h3>You have {notes.length} notes</h3>

      <NoteList
        notes={filteredNotes}
        onDelete={deleteNote}
      />
    </div>
  );
}

export default App;
