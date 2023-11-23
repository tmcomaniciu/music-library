import { useEffect, useState } from "react";
import Gallery from "./Components/Gallery/Gallery";
import SearchBar from "./Components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for Music!");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`);
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.results.length > 0) {
          setData(data.results);
        } else {
          setData([]);
          setMessage("Not Found");
        }
      };
      fetchData();
    } else {
      if (data) setData([]);
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };
  return (
    <div>
      {message}

      <SearchBar handleSearch={handleSearch} />
      <Gallery data={data} />
    </div>
  );
}

export default App;
