import ProfileTitle from "./ProfileTitle";
import ProfileTag from "./ProfileTag";
import ProfileModalButton from "./ProfileModalButton";

const ProfileActorResults = () => {
  return (
    <>
      <div className="justify-center items-center m-3 p-2 shadow-md text-center text-base">
        <div className="flex justify-center items-center m-3 p-2 shadow-md text-center text-base">
          <ProfileTitle title={"公演名：まありと愉快な仲間達"} />
        </div>
        <div className="flex justify-between m-10">
          <div>
            <p>劇場名：東京芸術劇場コンサートホール</p>
            <p>2021年10月1日〜2021年12月31日</p>
          </div>
          <div>
            <ProfileTag text={"252回公演"} />
            <ProfileTag text={"集客率：８０％"} />
          </div>
        </div>
        <div className="flex justify-end m-4">
          <ProfileModalButton title={"作品内容"} />
          <ProfileModalButton title={"出演キャスト"} />
        </div>
      </div>
    </>
  );
};

export default ProfileActorResults;
