import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <p className="empty-message">
        No notes yet. Add your first note above.
      </p>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;
