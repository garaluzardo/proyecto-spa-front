import './Profile.css';
import ProfilePik from "../../../src/images/profile-pic-cropped.jpg";

function Profile() {
  // Datos del usuario (pueden venir de props o de un estado)
  const user = {
    name: "Gara",
    username: "@gara_reader",
    bio: "Book lover | Fantasy enthusiast | Always reading something 📚",
    avatar: "",
    stats: {
      booksRead: 127,
      pagesRead: 45032,
      favoriteGenre: "Fantasy",
      currentlyReading: "The Name of the Wind",
    },
  };

  return (
    <div className="page">
      <div className="profile-page">
        <div className="profile-header">
          <img src={ProfilePik} alt="Profile" className="profile-avatar" />
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-username">{user.username}</p>
          <p className="profile-bio">{user.bio}</p>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h2>{user.stats.booksRead}</h2>
            <p>Books Read</p>
          </div>
          <div className="stat-card">
            <h2>{user.stats.pagesRead}</h2>
            <p>Pages Read</p>
          </div>
          <div className="stat-card">
            <h2>{user.stats.favoriteGenre}</h2>
            <p>Favorite Genre</p>
          </div>
        </div>

        <div className="currently-reading">
          <h2>Currently Reading</h2>
          <p>{user.stats.currentlyReading}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;