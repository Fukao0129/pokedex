// 以下、PokeAPIのレスポンスの型

/** ポケモン一覧APIレスポンスの型 */
export type PokemonListResult = {
  name: string;
  url: string;
};

/** タイプレスポンスの型 */
type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

/** 特性レスポンスの型 */
type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

/** 能力値レスポンスの型 */
type PokemonStats = {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
};

/** ポケモン詳細APIレスポンスの型 */
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
        front_shiny: string;
      };
    };
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStats[];
};

/** 種族情報APIレスポンスの型 */
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

/** 特性詳細APIレスポンスの型 */
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

// 以下、表示用の型

/** 特性表示用の型 */
export type PokemonAbilityDisplay = {
  name: string;
  flavorText: string;
};

/** 能力値表示用の型 */
export type PokemonStatsDisplay = {
  name: string;
  value: number;
};

/** ポケモン表示用の型 */
export type PokemonDisplay = {
  id: number;
  name: string;
  genus: string;
  englishName: string;
  image: string;
  shinyImage: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  description: string;
  stats: PokemonStatsDisplay[];
};
