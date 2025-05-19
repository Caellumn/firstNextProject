import { RowDataPacket } from "mysql2";
export interface Pokémon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokémonApiResult {
  results: {
    name: string;
    url: string;
  }[];
}

export interface Id extends RowDataPacket {
  id: number;
}
