import { useState } from "react";
import { RepositoryList } from "src/features/Repository";
import { Paginator } from "src/features/Paginator";

const REPOSITORIES_PER_PAGE = 10;
const MAX_PAGES_TO_SHOW = 10;

type Props = {
  repositories: {
    name: string;
    stargazerCount: number;
    pushedAt: string;
    id: string;
    url: string;
  }[];
  countOfRepositories: number;
};

export const RepositoriesSection = ({
  repositories,
  countOfRepositories,
}: Props) => {
  const [page, setPage] = useState(1);

  if (!repositories) {
    return null;
  }

  const countOfPages = Math.ceil(countOfRepositories / REPOSITORIES_PER_PAGE);
  const countOfPagesToShow =
    countOfPages > MAX_PAGES_TO_SHOW ? MAX_PAGES_TO_SHOW : countOfPages;

  const repositoriesToShow = repositories.slice(
    (page - 1) * REPOSITORIES_PER_PAGE,
    page * REPOSITORIES_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      <RepositoryList repositoryList={repositoriesToShow} />
      <Paginator
        maxPage={countOfPagesToShow}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </section>
  );
};
