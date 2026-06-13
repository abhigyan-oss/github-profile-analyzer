function ProfileCard({ user }) {
    const copyProfileLink = () => {
      navigator.clipboard.writeText(user.html_url);
      alert("Profile link copied!");
    };
  
    return (
      <div className="profile-card">
        <img
          src={user.avatar_url}
          alt={user.login}
          width="150"
        />
  
        <h2>{user.name || user.login}</h2>
  
        <p>{user.bio}</p>
  
        <div className="stats">
          <div className="stat-card">
            <h3>{user.followers}</h3>
            <p>Followers</p>
          </div>
  
          <div className="stat-card">
            <h3>{user.following}</h3>
            <p>Following</p>
          </div>
  
          <div className="stat-card">
            <h3>{user.public_repos}</h3>
            <p>Repos</p>
          </div>
        </div>
  
        <p>
          <strong>Location:</strong>{" "}
          {user.location || "Not Available"}
        </p>
  
        <br />
  
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
  
        <br />
        <br />
  
        <button
          className="theme-btn"
          onClick={copyProfileLink}
        >
          📋 Copy Profile Link
        </button>
      </div>
    );
  }
  
  export default ProfileCard;