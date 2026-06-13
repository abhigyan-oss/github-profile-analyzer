function RepoList({ repos }) {
    const topRepos = [...repos]
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count
      )
      .slice(0, 5);
  
    return (
      <div>
        <h2>Top Repositories</h2>
  
        {topRepos.map((repo) => (
          <div
            key={repo.id}
            className="repo-card"
          >
            <h3>{repo.name}</h3>
  
            <p>{repo.description}</p>
  
            <p>
              ⭐ {repo.stargazers_count}
            </p>
  
            <span className="language-badge">
             {repo.language}
             </span>
  
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    );
  }
  
  export default RepoList;