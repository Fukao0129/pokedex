/** 配列から日本語の指定されたプロパティを取得する関数
 * @param items - 対象オブジェクトの配列
 * @param prop - 取得したいプロパティのキー
 * @returns - 指定されたプロパティの値
 */
export const getJapanese = <
  T extends { language: { name: string } },
  K extends keyof T,
>(
  items: T[],
  prop: K,
): T[K] | "" => {
  const item =
    items.find((item) => item.language.name === "ja") ||
    items.find((item) => item.language.name === "ja-hrkt");
  return item ? item[prop] : "";
};
