import ProfileTitle from "./ProfileTitle";
import ProfileTag from "./ProfileTag";
import ProfileModal from "./ProfileModal";

const ProfileActorResults = (
  { title,
    theaterName,
    schedule,
    time,
    customer,
    actButton,
    actModalTitle,
    actModalText,
    castButton,
    castModalTitle,
    castModalText
  }
) => {
  return (
    <>
      <div className="justify-center items-center m-3 p-2 shadow-md text-center text-base">
        <div className="flex justify-center items-center m-3 p-2 shadow-md text-center text-base">
          <ProfileTitle title={title} />
        </div>
        <div className="flex justify-between m-10">
          <div>
            <p>劇場名：{theaterName}</p>
            <p>{schedule}</p>
          </div>
          <div>
            <ProfileTag text={time} type="回" />
            <ProfileTag text={customer} type="％" />
          </div>
        </div>
        <div className="flex justify-end m-4">
          <ProfileModal button={actButton} title={actModalTitle} text={actModalText} />
          <ProfileModal button={castButton} title={castModalTitle} text={castModalText} />
        </div>
      </div>
    </>
  );
};

export default ProfileActorResults;
