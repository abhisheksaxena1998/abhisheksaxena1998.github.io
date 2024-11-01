import "../index.css";
import { linkedin } from "../assets";

const Profile = () => {
  return (
    <div className="profile-container">
      <a
        href="https://www.linkedin.com/in/abhishek-saxena-5ba805180/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          src={linkedin}
          alt="Abhishek Saxena LinkedIn profile"
          className="linkedin-icon"
        />
      </a>
    </div>
  );
};

export default Profile;
