import PaginationButton from "./PaginationButton";
import { MAX_PAGINATION } from "../constants";

interface PaginationProps {
  offset: number;
  limit: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (page: number) => void;
  loading: boolean;
}

export default function Pagination({
  offset,
  limit,
  total,
  onNext,
  onPrev,
  onPageChange,
  loading,
}: PaginationProps) {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  /** ページ番号を取得 */
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = MAX_PAGINATION;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // 最後付近のページでは開始番号を調整
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {/** 一番最初に移動 */}
      <PaginationButton
        disabled={offset === 0 || loading}
        onClick={() => onPageChange(1)}
      >
        <span>{"<<"}</span>
      </PaginationButton>

      {/** 前へ移動 */}
      <PaginationButton disabled={offset === 0 || loading} onClick={onPrev}>
        <span>{"<"}</span>
      </PaginationButton>

      {/** ページ番号 */}
      {pageNumbers.map((page) => (
        <PaginationButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
          disabled={loading}
        >
          <span>{page}</span>
        </PaginationButton>
      ))}

      {/** 次へ移動 */}
      <PaginationButton
        disabled={offset + limit >= total || loading}
        onClick={onNext}
      >
        <span>{">"}</span>
      </PaginationButton>

      {/** 一番最後に移動 */}
      <PaginationButton
        disabled={offset + limit >= total || loading}
        onClick={() => onPageChange(totalPages)}
      >
        <span>{">>"}</span>
      </PaginationButton>
    </div>
  );
}
