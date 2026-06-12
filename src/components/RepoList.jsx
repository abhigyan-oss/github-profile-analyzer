function RepoList({ repos }) {
    return (
      <div>
        <h2>Repositories</h2>
  
        {repos.slice(0, 5).map((repo) => (
          <div
            key={repo.id}
            className="repo-card"
          >
            <h3>{repo.name}</h3>
  
            <p>{repo.description}</p>
  
            <p>
              ⭐ {repo.stargazers_count}
            </p>
  
            <p>
              Language: {repo.language}
            </p>
  
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