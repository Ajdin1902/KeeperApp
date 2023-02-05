import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes.js"

function App() {
    return (
        <div>
            <Header/>
            {note.map(elem => (
                <Note
                    key={elem.key}
                    title={elem.title}
                    content={elem.content}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;
