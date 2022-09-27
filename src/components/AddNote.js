import React, { Component, useState } from "react";
const AddNote = ({handleAddNote}) => {
    const [notetext, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = (event) => {
        if (notetext.trim().length > 0) {
            handleAddNote(notetext);
            setNoteText('');
        }
    };

    return (
        <div className="note new">
            <textarea placeholder='Type to add a note'
                onChange={handleChange}
                value={notetext}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit-notetext.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
export default AddNote;