import { FormEvent, useState } from "react";

import { Input } from "src/shared/ui/Input";
import { Button } from "src/shared/ui/Button";

import styles from "./SearchForm.module.css";

type Props = {
  onSubmit: (value: string) => void;
  name: string;
};

export const SearchForm = ({ onSubmit, name }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <Input
        value={inputValue}
        onChange={setInputValue}
        name={name}
        type="text"
        placeholder="search"
        className={styles.input}
      />
      <Button type="submit" className={styles.button}>
        Search
      </Button>
    </form>
  );
};
