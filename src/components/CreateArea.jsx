import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.titleOnChange} name="title" placeholder="Title" value={props.title} />
        <textarea onChange={props.noteOnChange} name="content" placeholder="Take a note..." rows="3" value={props.note} />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
