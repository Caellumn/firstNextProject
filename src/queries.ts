import { Pokémon, PokémonApiResult } from "@/types";

export const getAllPokémons = async (): Promise<Pokémon[]> => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data: PokémonApiResult = await resp.json();

    const respones = await Promise.all(data.results.map((el) => fetch(el.url)));
    const allPokémons: Pokémon[] = await Promise.all(
      respones.map((el) => el.json())
    );
    return allPokémons;
  } catch (error) {
    throw error;
  }
};
