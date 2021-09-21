import ProfileButton from "./ProfileButton";
import ProfileTitle from "./ProfileTitle";

const ProfileMiddleParts = () => {
  return (
    <div className="flex justify-center items-center w-100% border-b m-3 pl-44 text-center text-base">
      <ProfileTitle title={"過去の実績"} />
      <ProfileButton path="/director/action_edit" title={"追加する"} />
    </div>
  );
}

export default ProfileMiddleParts
