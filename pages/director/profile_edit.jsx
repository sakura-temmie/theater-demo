import Layout from "../../components/layoutParts/Layout";
import EditButton from "../../components/editParts/EditButton";
import EditTopParts from "../../components/editParts/EditTopParts";
import ProfileMiddleParts from "../../components/profileParts/ProfileMiddleParts";
import ProfileActorResults from "../../components/profileParts/ProfileActorResults";

const profile_edit = () => {
  return (
    <Layout title={"演出家プロフィール編集"}>
      <div style={{ width: "960px" }}>
        <EditButton title={"保存する"} />
        <EditTopParts />
        <ProfileMiddleParts />
        <ProfileActorResults />
      </div>
    </Layout>
  );
};

export default profile_edit;
