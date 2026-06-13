import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onSearch(username);
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button type="submit">
      <FaGithub />
        Search
      </button>
    </form>
  );
}

export default SearchBar;