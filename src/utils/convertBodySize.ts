/** 高さをメートルに変換する
 * @param height - 高さ（デシメートル単位）
 * @returns - 高さ（メートル単位）
 */
export const convertHeightToMeters = (height: number): string => {
  return `${height / 10}m`;
};

/** 重さをキログラムに変換する
 * @param weight - 重さ（ヘクトグラム単位）
 * @returns - 重さ（キログラム単位）
 */
export const convertWeightToKilograms = (weight: number): string => {
  return `${weight / 10}kg`;
};
