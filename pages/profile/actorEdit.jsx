import Layout from "../../components/layoutParts/Layout";
import EditTopParts from "../../components/editParts/EditTopParts";
import ProfileMiddleParts from "../../components/profileParts/ProfileMiddleParts";
import ProfileActorResults from "../../components/profileParts/ProfileActorResults";

const actorEdit = () => {
  return (
    <Layout title={"演出家プロフィール編集"}>
      <div style={{ width: "960px" }}>
        <EditTopParts />
        <ProfileMiddleParts />
        <ProfileActorResults />
      </div>
    </Layout>
  );
};

export default actorEdit;
