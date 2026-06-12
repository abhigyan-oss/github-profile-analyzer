function ProfileCard({ user }) {
    return (
      <div className="profile-card">
        <h2>{user.name}</h2>
  
        <img
          src={user.avatar_url}
          alt={user.login}
          width="150"
        />
  
        <p>{user.bio}</p>
  
        <br />
  
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Repositories: {user.public_repos}</p>
        <p>Location: {user.location}</p>
  
        <br />
  
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    );
  }
  
  export default ProfileCard;