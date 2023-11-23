import { useState, useEffect } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <form>
      <input placeholder="Enter your Search Term Here" />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
