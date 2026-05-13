export interface Pokemon {
  id: number;
  name: string;
  types: PokemonTypeSlot[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface PokemonTypeSlot {
  type: {
    name: string;
  };
}