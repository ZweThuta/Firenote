import React, { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://firenote-50d13-default-rtdb.firebaseio.com/notes.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again!");
      }
      const notes = await response.json();
      const modifiedNote = [];
      for (const key in notes) {
        modifiedNote.push({
          id: key,
          note: notes[key],
        });
      }
      setNotes(modifiedNote);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <NavBar totalNotes ={notes.length} />

      {isLoading && !error && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {error && !isLoading && <h1>{error}</h1>}
     

      {!isLoading && !error && (
        <>
          <AddNote getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={note.id} note={note} getNotes={getNotes} setNotes ={setNotes} notes={notes} index={index}/>
          ))}
        </>
      )}
       {
        notes.length === 0 && <Intro/>
      }
    </>
  );
};

export default App;
