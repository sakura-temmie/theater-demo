import EditImage from "./EditImage";
import EditDetail from "./EditDetail";
import EditHeading from "./EditHeading";

const ProfileTheatreTop = () => {
  return (
    <>
      <div style={{ width: "960px" }}>
        <div className="flex space-x-4 justify-center">
          <div className="w-1/2 h-52">
            <EditHeading title={"東京芸術劇場"} />
            <EditHeading title={"最大収容人数　　　　　　　　２０００人"} />
            <EditHeading title={"最寄駅　　　　　JR中央線　ー　新宿駅"} />
            <EditHeading title={"希望利用額（１週間）　　　　５０万円"} />
          </div>
          <EditImage />
        </div>
        <div className="flex space-x-4 justify-center">
          <EditDetail text="所在地" />
          <EditDetail text="空きスケジュール　直近1ヶ月（要相談）" />
        </div>
      </div>
    </>
  );
};

export default ProfileTheatreTop;
