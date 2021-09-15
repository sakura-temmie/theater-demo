import ProfileTitle from "./ProfileTitle";
import ProfileSentence from "./ProfileSentence";

const ProfileTheatreDetail = ({detail}) => {
  return (
    <>
      <div className="h-80 p-5">
        <div className="flex justify-center items-center w-100% m-3 p-2 shadow-md text-center text-base">
          <ProfileTitle title={"劇場情報"} />
        </div>
        <ProfileSentence text={detail} />
      </div>
    </>
  );
};

export default ProfileTheatreDetail;
