import Layout from "../../components/layoutParts/Layout";
import ProfileTheatreTop from "../../components/profileParts/ProfileTheatreTop";
import ProfileTheatreDetail from "../../components/profileParts/ProfileTheatreDetail";

const theatre = () => {
  return (
    <>
      <Layout title={"劇場詳細"}>
        <div style={{ width: "960px" }}>
          <ProfileTheatreTop />
          <ProfileTheatreDetail />
        </div>
      </Layout>
    </>
  );
};

export default theatre;
