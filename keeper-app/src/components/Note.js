import React from 'react';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Note;

// return (
//   <div className="note">
//     <h1>This is the note title</h1>
//     <p>This is the note content</p>
//   </div>
// );
