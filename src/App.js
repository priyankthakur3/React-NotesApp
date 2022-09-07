import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NotesList from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

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
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
