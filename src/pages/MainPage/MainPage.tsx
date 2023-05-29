import { useState } from "react";

import { SearchForm } from "src/shared/ui/SearchForm";
import { useRepositoriesToShow } from "./useRepositoriesToShow";
import { RepositoriesSection } from "./RepositoriesSection";
import { ErrorMessage } from "src/features/ErrorMessage/ErrorMessage";

export const MainPage = () => {
  const [queryValue, setQueryValue] = useState("");

  const {
    data: { repositories, countOfRepositories },
    isLoading,
    error,
  } = useRepositoriesToShow({ query: queryValue });

  const handleSubmit = (value: string) => {
    setQueryValue(value);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} name="search_repository" />
      {error && <ErrorMessage error={error} />}
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <RepositoriesSection
          repositories={repositories}
          countOfRepositories={countOfRepositories}
        />
      )}
    </div>
  );
};
