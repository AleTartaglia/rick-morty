import React from "react";

const Character = ({ character }) => {
  return (
    <div className="text-center p-3">
      <h4 className="">{character.name}</h4>
      <img
        className="img-fluid rounded-pill p-3"
        src={character.image}
        alt={character.name}
      />
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default Character;
