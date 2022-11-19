import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((response) => setPoke(response.results));
  }, []);

  return (
    <div>
      <ol>
        {poke.length > 0 &&
          poke.map((po, i) => {
            return <li key={i}>{po.name}</li>;
          })}
      </ol>
    </div>
  );
};
export default Pokemon;
