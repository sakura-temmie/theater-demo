import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";
import ProfileDetail from "./ProfileDetail";
import ProfileButton from "./ProfileButton";
import ProfileSentence from "./ProfileSentence";

const ProfileTopParts = ({ name, profile, cost, schedule }) => {
  return (
    <>
      <div className="flex flex-col space-x-4 justify-center">
        <di className="flex items-center justify-between">
          <p className="text-4xl m-10">{name}</p>
          <ProfileButton path="/director/profile_edit" title="編集する" />
        </di>
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
