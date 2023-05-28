import { useState } from "react";

import { SearchForm } from "src/shared/ui/SearchForm";
import { useRepositoriesToShow } from "./useRepositoriesToShow";
import { RepositoriesSection } from "./RepositoriesSection";

export const MainPage = () => {
  const [queryValue, setQueryValue] = useState("");

  const {
    data: { repositories, countOfRepositories },
    isLoading,
  } = useRepositoriesToShow({ query: queryValue });

  const handleSubmit = (value: string) => {
    setQueryValue(value);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} name="search_repository" />
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
