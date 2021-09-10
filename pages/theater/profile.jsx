import Layout from "../../components/layoutParts/Layout";
import ProfileButton from "../../components/profileParts/ProfileButton";
import ProfileTheaterTop from "../../components/profileParts/ProfileTheaterTop";
import ProfileTheaterDetail from "../../components/profileParts/ProfileTheaterDetail";

const profile = () => {
  return (
    <>
      <Layout title={"劇場詳細"}>
        <div style={{ width: "960px" }}>
          <ProfileButton title={"編集する"} />
          <ProfileTheaterTop />
          <ProfileTheaterDetail />
        </div>
      </Layout>
    </>
  );
};

export default profile;
