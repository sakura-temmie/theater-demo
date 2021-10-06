import ProfileImage from "./ProfileImage";
import ProfileDetail from "./ProfileDetail";
import ProfileHeading from "./ProfileHeading";
import ProfileButton from "./ProfileButton";

const ProfileTheatreTop = ({
  title,
  capacity,
  station,
  cost,
  address,
  schedule,
}) => {
  return (
    <>
      <div style={{ width: "960px" }}>
        <div className="flex space-x-4 justify-between">
          <div>
            <p className="ml-10 text-gray-400">theater</p>
            <p className="text-4xl ml-10 mb-10 mt-3">{title}</p>
          </div>
          <div className="">
            <ProfileButton title={"編集する"} path={"theater/edit"} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <ProfileImage />
        </div>
        <div className="w-2/3 h-52 m-auto">
          <ProfileHeading title={capacity} />
          <ProfileHeading title={station} />
          <ProfileHeading title={cost} />
        </div>
        <div className="flex space-x-4 justify-center">
          <ProfileDetail text={address} />
          <ProfileDetail text={schedule} />
        </div>
      </div>
    </>
  );
};

export default ProfileTheatreTop;
