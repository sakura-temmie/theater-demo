import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";
import ProfileDetail from "./ProfileDetail";
import ProfileButton from "./ProfileButton";
import ProfileSentence from "./ProfileSentence";

const ProfileTopParts = ({ name, profile, cost, schedule }) => {
  return (
    <>
      <div className="flex flex-col space-x-4 justify-center">
        <div className="flex items-center justify-between">
          <div>
          <p className="ml-10 text-gray-400">director</p>
          <p className="text-4xl ml-10 mb-10 mt-3">{name}</p>
          </div>
          <ProfileButton path="/director/profile_edit" title="編集する" />
        </div>
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
