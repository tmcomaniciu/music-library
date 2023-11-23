import { useEffect, useState } from "react";
import Gallery from "./Components/Gallery/Gallery";
import SearchBar from "./Components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for Music!");
  const [data, setData] = useState([]);

  return (
    <div>
      <Gallery />
      {message}
      <SearchBar />
    </div>
  );
}

export default App;
