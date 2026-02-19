export type PokemonListResult = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResult[];
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export interface PokemonAbilityDetail {
  names: {
    language: {
      name: string;
    };
    name: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
};

export type PokemonSpecies = {
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  hatch_counter: number;
};

export type PokemonAbilityDisplay = {
  name: string;
  flavorText: string;
};

export type PokemonDisplay = {
  id: number;
  name: string;
  genus: string;
  englishName: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  description: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
