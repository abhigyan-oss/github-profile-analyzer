function LanguageStats({ repos }) {
    const languageCount = {};
  
    repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;
      }
    });
  
    return (
      <div className="profile-card">
        <h2>Languages Used</h2>
  
        {Object.entries(languageCount).map(
          ([language, count]) => (
            <p key={language}>
              {language}: {count}
            </p>
          )
        )}
      </div>
    );
  }
  
  export default LanguageStats;