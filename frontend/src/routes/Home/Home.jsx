import React, { useContext } from "react";

export default function Home() {
  return (
    <div className="Home">
      <div>
        <h1>Veranstaltungen in deiner Nähe</h1>
        <p>Wo bist du gerade?</p>
        <input type="text" />
        <button>Los geht´s!</button>
      </div>
      <div>
        <h2>Veranstaltung erstellen</h2>
        <button>Erstellen</button>
      </div>
      Home
    </div>
  );
}
