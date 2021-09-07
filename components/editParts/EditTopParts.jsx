import EditImage from "./EditImage";
import EditText from "./EditText";
import EditDetail from "./EditDetail";

const EditTopParts = () => {
  return (
    <>
      <div className="flex space-x-4 justify-center">
        <EditText name={"かくまあり"} text={"自己紹介"} />
        <EditImage />
      </div>
      <div className="flex space-x-4 justify-center">
        <EditDetail text="希望利用額（１週間）　【５０万円】" />
        <EditDetail text="空きスケジュール　直近1ヶ月（要相談）" />
      </div>
    </>
  );
};

export default EditTopParts;
