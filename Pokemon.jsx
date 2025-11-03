import { useState, useEffect } from "react";
function Pokemon() {
  const [named, setName] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }


async function checkPokemon (e){
 e.preventDefault() ; 

 
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
    </>
  );
}

export default Pokemon;
