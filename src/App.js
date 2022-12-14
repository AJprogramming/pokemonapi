import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPoke(response.data.results);
      });
  }, []);

  return (
    <div>
      <ol>
        {poke.length > 0 && poke.map((po, i) => <li key={i}>{po.name}</li>)}
      </ol>
    </div>
  );
};
export default Pokemon;
