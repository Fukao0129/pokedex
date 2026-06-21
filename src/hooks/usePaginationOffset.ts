import { useSearchParams } from "react-router";

/**
 * ページネーションのオフセットを管理するカスタムフック
 * @param limit 1ページあたりのアイテム数
 * @returns offset と各ページ操作関数
 */
export const usePaginationOffset = (limit: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  /** 現在のページ番号 */
  const page = Math.max(parseInt(searchParams.get("page") ?? "1", 10));

  /** 取得開始位置 */
  const offset = (page - 1) * limit;

  /** 指定したページ番号へ移動 */
  const goToPage = (next: number) => {
    setSearchParams((prev) => {
      prev.set("page", String(Math.max(next, 1)));
      return prev;
    });
  };

  /** 前のページへ移動 */
  const goToPrev = () => goToPage(page - 1);

  /** 次のページへ移動 */
  const goToNext = () => goToPage(page + 1);

  return { offset, goToPrev, goToNext, goToPage } as const;
};
