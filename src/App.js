import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NotesList from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "first note!",
    date: "9/6/22"
  },
  {
    id: nanoid(),
    text: "second note!",
    date: "10/6/22"
  }, {
    id: nanoid(),
    text: "third note!",
    date: "12/6/22"
  }
  ]);

  const [searchText, setSearchText] = useState('');
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Header/>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText))
        }
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} />
      
    </div>
    
  );
}

export default App;
