import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <form onSubmit={(e) => handleSearch(e, searchTerm)}>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter your Search Term Here"
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
