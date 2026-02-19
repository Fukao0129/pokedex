import { useState, useEffect, useCallback } from "react";

/**
 * ページネーションのオフセットを管理するカスタムフック
 * @param limit 1ページあたりのアイテム数
 * @returns [offset, setOffset] オフセットとその更新関数
 */
export const usePaginationOffset = (limit: number) => {
  /** デフォルトの取得開始位置 */
  const getInitialOffset = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page") || "1", 10);
    return (Math.max(page, 1) - 1) * limit;
  }, [limit]);

  const [offset, setOffset] = useState(getInitialOffset); // 取得開始位置

  /** URLとoffsetを同期 */
  useEffect(() => {
    const page = Math.floor(offset / limit) + 1;
    const url = new URL(window.location.href);
    const currentPage = parseInt(url.searchParams.get("page") || "1", 10);

    if (page !== currentPage) {
      url.searchParams.set("page", String(page));
      window.history.pushState({}, "", url);
    }
  }, [offset, limit]);

  /** ブラウザの戻る・進むボタン対応 */
  useEffect(() => {
    const handlePopState = () => {
      setOffset(getInitialOffset());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getInitialOffset]);

  return [offset, setOffset] as const;
};
