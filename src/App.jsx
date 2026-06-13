import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import LanguageStats from "./components/LanguageStats";
import LanguageChart from "./components/LanguageChart";
import { getUser, getRepos } from "./services/githubApi";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme =
      localStorage.getItem("theme");

    return savedTheme
      ? JSON.parse(savedTheme)
      : true;
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");

      const userData =
        await getUser(username);

      const repoData =
        await getRepos(username);

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

  const topRepo =
    repos.length > 0
      ? repos.reduce((a, b) =>
          a.stargazers_count >
          b.stargazers_count
            ? a
            : b
        )
      : null;

  return (
    <div
      className={`container ${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className="content">

        <header className="header">
          <h1>
            🚀 GitHub Profile Analyzer
          </h1>

          <p>
            Analyze any GitHub profile
            instantly
          </p>
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

        <SearchBar
          onSearch={handleSearch}
        />

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

        {user && (
          <ProfileCard user={user} />
        )}

        {topRepo && (
          <div className="profile-card">
            <h2>
              🔥 Most Starred Repository
            </h2>

            <h3>{topRepo.name}</h3>

            <p>
              ⭐{" "}
              {
                topRepo.stargazers_count
              }
            </p>

            <p>
              {topRepo.description}
            </p>

            <br />

            <a
              href={topRepo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        )}

        {repos.length > 0 && (
          <LanguageStats
            repos={repos}
          />
        )}

        {repos.length > 0 && (
          <LanguageChart
            repos={repos}
          />
        )}

        <RepoList repos={repos} />

        <footer className="footer">
          Built with React + GitHub API
          🚀
        </footer>

      </div>
    </div>
  );
}

export default App;