import React, { useContext } from "react";
import { SectionsContext } from "../../context/sectionsContext";

export default function SearchedEvents(props) {
  const { location } = useContext(SectionsContext);
  console.log(location);
  return <div>SearchedEvents</div>;
}
