import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import LanguageStats from "./components/LanguageStats";
import { getUser, getRepos } from "./services/githubApi";
import LanguageChart from "./components/LanguageChart";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] =
  useState(true);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");

      const userData = await getUser(username);
      const repoData = await getRepos(username);

      setUser(userData);
      setRepos(repoData);
    } catch (error) {
      console.log(error);

      setError("GitHub user not found");
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`container ${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className="content">
  
        <header className="header">
          <h1>🚀 GitHub Profile Analyzer</h1>
          <p>Analyze any GitHub profile instantly</p>
        </header>
  
        <div className="theme-container">
          <button
            className="theme-btn"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode
              ? "☀️ Light Mode"
              : "🌙 Dark Mode"}
          </button>
        </div>
  
        <SearchBar onSearch={handleSearch} />
  
        {loading && (
          <h2 className="loading">
            Loading...
          </h2>
        )}
  
        {error && (
          <h2 className="error">
            {error}
          </h2>
        )}
  
        {user && <ProfileCard user={user} />}
  
        {repos.length > 0 && (
          <LanguageStats repos={repos} />
        )}
  
        {repos.length > 0 && (
          <LanguageChart repos={repos} />
        )}
  
        <RepoList repos={repos} />
  
      </div>
    </div>
  );
}

export default App;