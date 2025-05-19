/* eslint-disable @next/next/no-img-element */
import { getAllPokémons } from "@/queries";
import { Pokémon } from "@/types";

const page = async () => {
  try {
    const allPokémons = await getAllPokémons();
    console.log(allPokémons);
    return (
      <>
        <div className="pokedex-container">
          <h1 className="pokedex-title">my pokédex</h1>
          <ul className="pokedex-favorites"></ul>
          <h1 className="pokedex-title">all available pokémons online</h1>
          <ul className="pokedex-grid">
            {allPokémons.map((pokémon: Pokémon) => (
              <li key={pokémon.id} className="pokemon-card">
                <span className="pokemon-id">#{pokémon.id}</span>
                <div className="pokemon-image">
                  <img src={pokémon.sprites.front_default} alt={pokémon.name} />
                </div>
                <p className="pokemon-name">{pokémon.name}</p>
                <button className="pokemon-button">catch</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return <div>something went wrong</div>;
  }
};
export default page;
