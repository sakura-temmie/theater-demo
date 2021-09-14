import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";
import ProfileDetail from "./ProfileDetail";

const ProfileTopParts = ({ name, profile, cost, schedule }) => {
  return (
    <>
      <div className="flex space-x-4 justify-center">
        <ProfileText name={name} text={profile} />
        <ProfileImage />
      </div>
      <div className="flex space-x-4 justify-center">
        <ProfileDetail text={cost} />
        <ProfileDetail text={schedule} />
      </div>
    </>
  );
};

export default ProfileTopParts;
