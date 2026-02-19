import type {
  PokemonDetail,
  PokemonSpecies,
  PokemonDisplay,
} from "../types/pokemon";
import { getJapanese } from "./index";

/** ポケモンの表示用データにフォーマットする
 * @param detail - ポケモンの詳細情報
 * @param species - ポケモンの種族情報
 * @returns - ポケモン表示用データ
 */
export const formatPokemonDisplay = (
  detail: PokemonDetail,
  species: PokemonSpecies,
): PokemonDisplay => {
  // 名前
  let japaneseName = getJapanese(species.names, "name") || detail.name;
  japaneseName = formatPokemonName(japaneseName, detail.name);

  // 説明文
  const descriptionEntry = getJapanese(
    species.flavor_text_entries,
    "flavor_text",
  );
  const description = descriptionEntry
    ? descriptionEntry.replace(/\n/g, " ").replace(/\f/g, " ")
    : "説明がありません。";

  // 分類
  const genus = getJapanese(species.genera, "genus");

  // タイプ
  const types = detail.types.map((t) => t.type.name);

  // 特性
  const abilities = detail.abilities.map((a) => a.ability.name);

  // 画像
  const image = detail.sprites.other["official-artwork"].front_default;

  // 色違い画像
  const shinyImage = detail.sprites.other["official-artwork"].front_shiny;

  return {
    id: detail.id,
    name: japaneseName,
    genus,
    englishName: detail.name,
    image,
    shinyImage,
    height: detail.height,
    weight: detail.weight,
    types,
    abilities,
    description,
  };
};

/**
 * 特殊な姿のポケモンの名前をフォーマットする
 * @param japaneseName - 日本語の名前
 * @param englishName - 英語の名前
 * @returns - フォーマットされた名前
 */
const formatPokemonName = (
  japaneseName: string,
  englishName: string,
): string => {
  const transforms = [
    {
      // ゲンシカイキ
      match: ["-primal"],
      transform: (name: string) => `ゲンシ${name}`,
    },
    {
      // メガシンカ
      match: ["-mega-x", "-mega-y", "-mega-z", "-mega"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-mega-x": "X",
          "-mega-y": "Y",
          "-mega-z": "Z",
        };
        const suffix = suffixes[id] || "";
        return `メガ${name}${suffix}`;
      },
    },
    {
      // リージョンフォーム
      match: ["-hisui", "-paldea", "-alola", "-galar"],
      transform(name: string, id: string) {
        const suffixes: Record<string, string> = {
          "-hisui": "(ヒスイのすがた)",
          "-paldea": "(パルデアのすがた)",
          "-alola": "(アローラのすがた)",
          "-galar": "(ガラルのすがた)",
        };
        const suffix = suffixes[id] || "";
        return `${name}${suffix}`;
      },
    },
    {
      // キョダイマックス
      match: ["-gmax"],
      transform: (name: string) => `${name}(キョダイマックス)`,
    },
    {
      // ぬしポケモン
      match: ["-totem"],
      transform: (name: string) => `${name}(ぬし)`,
    },
    {
      // オリジンフォルム
      match: ["-origin"],
      transform: (name: string) => `${name}(オリジンフォルム)`,
    },
    {
      // スカイフォルム
      match: ["-sky"],
      transform: (name: string) => `${name}(スカイフォルム)`,
    },
    {
      // ステップフォルム
      match: ["-pirouette"],
      transform: (name: string) => `${name}(ステップフォルム)`,
    },
    {
      // かくごのすがた
      match: ["-resolute"],
      transform: (name: string) => `${name}(かくごのすがた)`,
    },
    {
      // サトシゲッコウガ
      match: ["-ash"],
      transform: (name: string) => `サトシ${name}`,
    },
    {
      // ダルマモード
      match: ["-zen"],
      transform: (name: string) => `${name}(ダルマモード)`,
    },
    {
      // れいじゅうフォルム
      match: ["-therian"],
      transform: (name: string) => `${name}(れいじゅうフォルム)`,
    },
    {
      // マイティフォルム
      match: ["-hero"],
      transform: (name: string) => `${name}(マイティフォルム)`,
    },
    {
      // ステラフォルム
      match: ["-stellar"],
      transform: (name: string) => `${name}(ステラフォルム)`,
    },
    {
      // デオキシスのフォルム
      match: ["-attack", "-defense", "-speed"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-attack": "アタックフォルム",
          "-defense": "ディフェンスフォルム",
          "-speed": "スピードフォルム",
        };
        const suffix = suffixes[id] || "";
        return `${name}${suffix}`;
      },
    },
    {
      // ロトムのフォルム
      match: ["-heat", "-wash", "-frost", "-fan", "-mow"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-heat": "ヒート",
          "-wash": "ウォッシュ",
          "-frost": "フロスト",
          "-fan": "スピン",
          "-mow": "カット",
        };
        const suffix = suffixes[id] || "";
        return `${suffix}${name}`;
      },
    },
    {
      // ポワルンのフォルム
      match: ["-sunny", "-rainy", "-snowy"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-sunny": "(たいようのすがた)",
          "-rainy": "(あまみずのすがた)",
          "-snowy": "(ゆきぐものすがた)",
        };
        const suffix = suffixes[id] || "";
        return `${name}${suffix}`;
      },
    },
    {
      // キュレムのフォルム
      match: ["-black", "-white"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-black": "ブラック",
          "-white": "ホワイト",
        };
        const suffix = suffixes[id] || "";
        return `${suffix}${name}`;
      },
    },
    {
      // ジガルデのフォルム
      match: ["-10-power-construct", "-50-power-construct", "-complete"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-10-power-construct": "(10%フォルム)",
          "-50-power-construct": "(50%フォルム)",
          "-complete": "(パーフェクトフォルム)",
        };
        const suffix = suffixes[id] || "";
        return `${name}${suffix}`;
      },
    },
    {
      // ネクロズマのフォルム
      match: ["-dusk", "-dawn", "-ultra"],
      transform: (name: string, id: string) => {
        const suffixes: Record<string, string> = {
          "-dusk": "(たそがれのたてがみ)",
          "-dawn": "(あかつきのつばさ)",
          "-ultra": "(ウルトラネクロズマ)",
        };
        const suffix = suffixes[id] || "";
        return `${name}${suffix}`;
      },
    },
  ];

  let formattedName = japaneseName;

  for (const rule of transforms) {
    const matchId = rule.match.find((id) => englishName.includes(id));
    if (matchId) {
      formattedName = rule.transform(japaneseName, matchId);
      return formattedName;
    }
  }

  return formattedName;
};
