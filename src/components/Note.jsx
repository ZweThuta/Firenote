import React from "react";
import Bin from "../svgs/Bin";
import ArrowUp from "../svgs/ArrowUp";
import ArrowDown from "../svgs/ArrowDown";

const Note = ({ note, getNotes, setNotes, notes, index }) => {
  const moveUp = (index) => {
    if (index > 0) {
      const updatedNotes = [...notes];
      [updatedNotes[index], updatedNotes[index - 1]] = [
        updatedNotes[index - 1],
        updatedNotes[index],
      ];
      setNotes(updatedNotes);
    }
  };

  const moveDown = (index) => {
    if (index < notes.length - 1) {
      const updatedNotes = [...notes];
      [updatedNotes[index], updatedNotes[index + 1]] = [
        updatedNotes[index + 1],
        updatedNotes[index],
      ];
      setNotes(updatedNotes);
    }
  };

  const { note: text, id } = note;
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://firenote-50d13-default-rtdb.firebaseio.com/notes/${id}.json`,

        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Failed to delete!");
      }
      getNotes();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="card card-ctr">
      <h3>{text}</h3>
      <div className="arrow-btn">
      <div onClick={() => moveUp(index)}>
        <ArrowUp/>
        </div>
      <div onClick={() => moveDown(index)}>
        <ArrowDown/>
      </div>
      </div>

      <div onClick={deleteNote}>
        <Bin />
      </div>
    </div>
  );
};

export default Note;
