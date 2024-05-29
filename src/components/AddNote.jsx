import React, { useState } from "react";

const AddNote = ({getNotes}) => {
  //define state
  const [note, setNote] = useState("");
  // add new note
  const addNote = async (e) => {
    e.preventDefault();
    try{
    await fetch(
      "https://firenote-50d13-default-rtdb.firebaseio.com/notes.json",
      {
        method: "POST",
        body: JSON.stringify(note),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    setNote("")
    getNotes()
}catch(error){
alert("Something went wrong. Please try again later!")
}
  };
  return (
    <section>
      <form className="card" onSubmit={addNote}>
        <input
          type="text"
          placeholder="Enter new note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default AddNote;
