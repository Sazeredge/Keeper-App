import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [title, setTitle] = useState([]);
  const [note, setNote] = useState([]);

  function titleOnChange(event){
    const title1 = event.target.value;
    setTitle(title1);
  }

  function noteOnChange(event){
    const note1 = event.target.value;
    setNote(note1);
  }

  function addNote(event){
    const obj = {
      title : title,
      note : note
    }
    setNoteArray([...noteArray, obj]);
    setTitle("");
    setNote("");

    event.preventDefault();
  }

  function deleteNote(id){
    setNoteArray(noteArray.filter((value, index) => {
      return id !== index;
    })
    );
  }

  return (
    <div>
      <Header />

      <CreateArea title={title}
      note={note}
      titleOnChange={titleOnChange}
      noteOnChange={noteOnChange}
      addNote={addNote} />

      {noteArray.map((value, index) => {
        return <Note key={index} id={index} title={value.title} content={value.note} deleteNote={deleteNote} />
      })}

      <Footer />
    </div>
  );
}

export default App;
