import ProfileImage from "./ProfileImage";
import ProfileDetail from "./ProfileDetail";
import ProfileHeading from "./ProfileHeading";

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
        <div className="flex space-x-4 justify-center">
          <div className="w-1/2 h-52">
            <ProfileHeading title={title} />
            <ProfileHeading title={capacity} />
            <ProfileHeading title={station} />
            <ProfileHeading title={cost} />
          </div>
          <ProfileImage />
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
