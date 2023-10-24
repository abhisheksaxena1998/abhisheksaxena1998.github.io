import "../index.css";
import { linkedin } from "../assets";

const Profile = () => {
  return (
    <div className="profiles">
      <a href="https://www.linkedin.com/in/abhishek-saxena-5ba805180/">
        <img
          loading="lazy"
          src={linkedin}
          alt="Abhishek Saxena linkedin profile"
          className="w-14 h-14 object-contain"
        />
      </a>
    </div>
  );
};

export default Profile;
