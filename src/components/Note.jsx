import React from "react";

function Note(props) {
  const title = props.title;
  const content = props.content;

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => {
        return props.deleteNote(props.id);
      }}>DELETE</button>
    </div>
  );
}

export default Note;
