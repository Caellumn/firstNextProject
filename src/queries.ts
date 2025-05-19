import { Pokémon, PokémonApiResult } from "@/types";
import { connect } from "@/dbconnect";
import { Id } from "@/types";
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

export const getCaughtPokémons = async (): Promise<Id[]> => {
  try {
    const connection = await connect();
    const [rows] = await connection.query<Id[]>("SELECT * FROM pokedex");
    return rows;
  } catch (error) {
    throw error;
  }
};

export const addToPokedex = async (id: number): Promise<void> => {
  try {
    const connection = await connect();
    await connection.query("INSERT INTO pokedex (id) VALUES (?)", [id]);
  } catch (error) {
    throw error;
  }
};

export const releaseFromPokedex = async (id: number): Promise<void> => {
  try {
    const connection = await connect();
    await connection.query("DELETE FROM pokedex WHERE id = ?", [id]);
  } catch (error) {
    throw error;
  }
};
