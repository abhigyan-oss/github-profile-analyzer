import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import { getUser, getRepos } from "./services/githubApi";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async (username) => {
    try {
      const userData = await getUser(username);
      const repoData = await getRepos(username);

      setUser(userData);
      setRepos(repoData);
    } catch (error) {
      console.log(error);
      alert("User not found");
    }
  };

  return (
    <div>
      <h1>GitHub Profile Analyzer</h1>

      <SearchBar onSearch={handleSearch} />

      {user && <ProfileCard user={user} />}

      <RepoList repos={repos} />
    </div>
  );
}

export default App;