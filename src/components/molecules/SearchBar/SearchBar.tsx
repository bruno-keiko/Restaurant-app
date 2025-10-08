"use client";
import React, { useState } from "react";
import InputField from "../../atoms/InputField";
import Button from "../../atoms/button";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Real-time search
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch(""); // Clear results
  };

  return (
    <div className={styles["search-bar"]}>
      <InputField
        placeholder="Search items"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <Button size="large" onClick={handleClear}>
          Clear
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
