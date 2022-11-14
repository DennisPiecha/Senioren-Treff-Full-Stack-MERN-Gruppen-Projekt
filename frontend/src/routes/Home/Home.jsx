import React, { useContext, useState, useRef } from "react";
import axiosConfig from "../../util/axiosConfig";

export default function Home() {
  const formElement = useRef(null);
  const locationElement = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { location: locationElement.current.value };
    try {
      const axiosResp = await axiosConfig.get("/search/:location", data);
      console.log(axiosResp);
    } catch (error) {}
  };
  return (
    <div className="Home">
      <div>
        <h1>Veranstaltungen in deiner Nähe</h1>
        <p>Wo bist du gerade?</p>
        <form ref={formElement} method="get" onSubmit={submitHandler}>
          <input ref={locationElement} type="text" />
          <input type="submit" value="Los geht´s!" />
        </form>
      </div>
      <div>
        <h2>Veranstaltung erstellen</h2>
        <button>Erstellen</button>
      </div>
    </div>
  );
}
