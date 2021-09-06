import Layout from "../../components/layoutParts/Layout";
import ProfileTheatreTop from "../../components/profileParts/ProfileTheatreTop";
import ProfileTitle from "../../components/profileParts/ProfileTitle";
import ProfileSentence from "../../components/profileParts/ProfileSentence";

const theatre = () => {
  return (
    <>
      <Layout title={"劇場詳細"}>
        <div style={{ width: "960px" }}>
          <ProfileTheatreTop />
          <div className="h-80 p-5">
            <div className="flex justify-center items-center w-100% m-3 p-2 shadow-md text-center text-base">
              <ProfileTitle title={"劇場情報"} />
            </div>
            <ProfileSentence text={"自由入力"} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default theatre;
