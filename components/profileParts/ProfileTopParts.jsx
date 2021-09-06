import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";
import ProfileDetail from "./ProfileDetail";
import ProfileButton from "./ProfileButton";

const ProfileTopParts = () => {
  return (
    <>
      <ProfileButton title={"編集する"} />
      <div className="flex space-x-4 justify-center">
        <ProfileText name={"かくまあり"} text={"自己紹介"} />
        <ProfileImage />
      </div>
      <div className="flex space-x-4 justify-center">
        <ProfileDetail text="希望利用額（１週間）　【５０万円】" />
        <ProfileDetail text="空きスケジュール　直近1ヶ月（要相談）" />
      </div>
    </>
  );
};

export default ProfileTopParts;
