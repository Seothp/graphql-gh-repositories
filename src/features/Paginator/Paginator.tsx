import { Button } from "src/shared/ui/Button";

import styles from "./Paginator.module.css";

type Props = {
  maxPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const ELIPSIS = "...";

export const Paginator = ({ maxPage, currentPage, onPageChange }: Props) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  if (maxPage === 1) {
    return null;
  }

  const buttonsValues: Array<number | typeof ELIPSIS> = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];

  if (currentPage > 3) {
    if (currentPage > 4) {
      buttonsValues.unshift(ELIPSIS);
    }

    buttonsValues.unshift(1);
  }

  if (currentPage < maxPage - 2) {
    if (currentPage < maxPage - 3) {
      buttonsValues.push(ELIPSIS);
    }

    buttonsValues.push(maxPage);
  }

  const filteredButtonsValues = buttonsValues.filter(
    (page) => page === ELIPSIS || (page > 0 && page <= maxPage)
  );

  return (
    <ul className={styles.paginatorList}>
      {filteredButtonsValues.map((page, idx) => (
        <li className={styles.paginatorItem} key={`${page}-${idx}`}>
          {page === ELIPSIS ? (
            <div className={styles.paginatorElipsis}>{page}</div>
          ) : (
            <Button
              onClick={() => handlePageChange(page)}
              type="button"
              className={styles.paginatorButton}
            >
              {page}
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
