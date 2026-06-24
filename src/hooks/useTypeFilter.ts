import { useSearchParams } from "react-router";

/**
 * タイプフィルターの状態をURLクエリパラメータで管理するカスタムフック
 * @returns 選択中のタイプ英名と、選択・解除の操作関数
 */
export const useTypeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /** 選択中のタイプ英名 */
  const selectedType = searchParams.get("type");

  /** タイプを選択する
   * @param typeName タイプの英名
   */
  const selectType = (typeName: string) => {
    setSearchParams((prev) => {
      prev.set("type", typeName);
      prev.delete("page"); // ページ指定は解除する
      return prev;
    });
  };

  /** タイプフィルターを解除し、1ページ目に戻す */
  const clearType = () => {
    setSearchParams((prev) => {
      prev.delete("type");
      prev.set("page", "1");
      return prev;
    });
  };

  return { selectedType, selectType, clearType } as const;
};
