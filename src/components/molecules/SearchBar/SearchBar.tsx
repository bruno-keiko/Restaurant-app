import React, { useState } from "react";
import InputField from "../../atoms/InputField";
import Button from "../../atoms/button";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  // eslint-disable-next-line no-unused-vars
  onSearch: (value: React.SetStateAction<string>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchTerm("");
    }
  };
  return (
    <div className={styles["search-bar"]}>
      <InputField
        placeholder="Search items"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button id={styles["search-bar-btn"]} size="large" onClick={handleSearch}>
        Go
      </Button>
    </div>
  );
};

export default SearchBar;
