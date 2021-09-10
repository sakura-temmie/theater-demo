import ProfileTitle from "./ProfileTitle";
import ProfileSentence from "./ProfileSentence";

const ProfileTheatreDetail = () => {
  return (
    <>
      <div className="h-80 p-5">
        <div className="flex justify-center items-center w-100% m-3 p-2 shadow-md text-center text-base">
          <ProfileTitle title={"劇場情報"} />
        </div>
        <ProfileSentence text={"自由入力"} />
      </div>
    </>
  );
};

export default ProfileTheatreDetail;
