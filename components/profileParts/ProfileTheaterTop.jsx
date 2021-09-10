import ProfileImage from "./ProfileImage";
import ProfileDetail from "./ProfileDetail";
import ProfileHeading from "./ProfileHeading";

const ProfileTheatreTop = () => {
  return (
    <>
      <div style={{ width: "960px" }}>
        <div className="flex space-x-4 justify-center">
          <div className="w-1/2 h-52">
            <ProfileHeading title={"東京芸術劇場"} />
            <ProfileHeading title={"最大収容人数　　　　　　　　２０００人"} />
            <ProfileHeading title={"最寄駅　　　　　JR中央線　ー　新宿駅"} />
            <ProfileHeading title={"希望利用額（１週間）　　　　５０万円"} />
          </div>
          <ProfileImage />
        </div>
        <div className="flex space-x-4 justify-center">
          <ProfileDetail text="所在地" />
          <ProfileDetail text="空きスケジュール　直近1ヶ月（要相談）" />
        </div>
      </div>
    </>
  );
};

export default ProfileTheatreTop;
