import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [AllNotes, setAllNotes] = useState([]);
const url = "https://mernserver-1h0u.onrender.com/notes/";
  
  
  useEffect(() => {
    // Fetch data from the server
    const fetchNotes = async () => {
      try {
        // Make a GET request to the server
        const res = await axios.get(url);


        console.log(res); //test

        setAllNotes(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNotes(); // Call fetchNotes function when component mounts
  }, []);

  function addNote(newNote) {
    setAllNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div className="notes-box">
        {AllNotes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            setAllNotes={setAllNotes}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App;
