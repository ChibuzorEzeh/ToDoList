import { useState, useEffect } from "react";
function Pokemon() {
  const [named, setName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [message, setMessage] = useState("");
  

  function handleInputChange(e) {
    setName(e.target.value);
  }

  async function checkPokemon(e) {
    e.preventDefault();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${named.toLowerCase()}`
    );
    console.log (response)
    try {
      if (!response.ok) {
        throw new Error(`${named} is not a pokemon`);
      }
      if (named.trim() !== "") {
        const data = await response.json();
        setPokemonData(data)
        setMessage(data.name);
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="pokiParent">
        <form action="" onSubmit={checkPokemon}>
          <h2>Pokemon Search</h2>
          <label htmlFor="pokiSearch">Name :</label>
          <input
            onChange={handleInputChange}
            value={named}
            type="text"
            id="pokiSearch"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {message && <h1>{message}</h1>}
      {pokemonData && <img id="pI" width= "100px" src={pokemonData.sprites.other["official-artwork"].front_default} alt="" />}
    </>
  );
}

export default Pokemon;
