import React from "react";
import Icon from '@mdi/react';
import { mdiDeleteEmpty } from '@mdi/js';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { mdiNoteEdit } from '@mdi/js';

function Note(props) {
  async function deleteNote() {
    try {
      // Make DELETE request to the server
      await axios.delete(process.env.REACT_APP_API_BASE_URL + props.id);
      // Add this code below the line we make DELETE request
            props.setAllNotes((prevNotes) =>
            prevNotes.filter((note) =>
              note._id !== props.id)
            );
    } catch (err) {
      console.log(err);
    }
  }
 // Access to useNavigate function
 let navigate = useNavigate();
 // Function to redirect to "Editor" page
 function routeChange() {
   let path = "/notes/edit/" + props.id;
   navigate(path);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
      <Icon path={mdiDeleteEmpty} size={1} />
      </button>
      <button onClick={routeChange}>
      <Icon path={mdiNoteEdit} size={1} />
      </button>
    </div>
  );
}

export default Note;
