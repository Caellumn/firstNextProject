/* eslint-disable @next/next/no-img-element */
import {
  getAllPokémons,
  getCaughtPokémons,
  addToPokedex,
  releaseFromPokedex,
} from "@/queries";
import { Pokémon, Id } from "@/types";
import { revalidateTag } from "next/cache";
import Image from "next/image";
const page = async () => {
  try {
    const allPokémons: Pokémon[] = await getAllPokémons();
    const caugthPokémons: Id[] = await getCaughtPokémons();
    console.log(allPokémons);

    const handleCatch = async (fd: FormData) => {
      "use server";
      try {
        await addToPokedex(parseInt(fd.get("id") as string));
        revalidateTag("");
      } catch (error) {
        console.log(error);
      }
    };
    const handleRelease = async (fd: FormData) => {
      "use server";
      try {
        await releaseFromPokedex(parseInt(fd.get("id") as string));
        revalidateTag("pokedex");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
        <div className="pokedex-container">
          <h1 className="pokedex-title">my pokédex</h1>
          <ul className="pokedex-favorites pokedex-grid">
            {allPokémons
              .filter((pokémon: Pokémon) =>
                caugthPokémons.some((el) => el.id === pokémon.id)
              )
              .map((pokémon: Pokémon) => (
                <li key={pokémon.id} className="pokemon-card">
                  <span className="pokemon-id">#{pokémon.id}</span>
                  <div className="pokemon-image">
                    <Image
                      src={pokémon.sprites.front_default}
                      alt={pokémon.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="pokemon-name">{pokémon.name}</p>
                  <form action={handleRelease}>
                    <input type="hidden" name="id" value={pokémon.id} />
                    <button className="pokemon-button">release</button>
                  </form>
                </li>
              ))}
          </ul>
          <h1 className="pokedex-title">all available pokémons online</h1>
          <ul className="pokedex-grid">
            {allPokémons.map((pokémon: Pokémon) => (
              <li key={pokémon.id} className="pokemon-card">
                <span className="pokemon-id">#{pokémon.id}</span>
                <div className="pokemon-image">
                  <img src={pokémon.sprites.front_default} alt={pokémon.name} />
                </div>
                <p className="pokemon-name">{pokémon.name}</p>
                <form action={handleCatch}>
                  <input type="hidden" name="id" value={pokémon.id} />
                  <button className="pokemon-button">catch</button>
                </form>
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
