import React, { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage setPage={setPage} page={page} />
      {loading ? (
        <h2 className="text-center display-1 py-4">Loading data ...</h2>
      ) : (
        <div className="row p-4">
          {characters.map((character) => (
            <div className="col-md-4 mt-5" key={character.id}>
              <Character character={character} />
            </div>
          ))}
          <NavPage setPage={setPage} page={page} />
        </div>
      )}
    </div>
  );
};

export default CharacterList;
