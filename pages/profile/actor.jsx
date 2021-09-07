import Layout from "../../components/layoutParts/Layout";
import ProfileButton from "../../components/profileParts/ProfileButton";
import ProfileTopParts from "../../components/profileParts/ProfileTopParts";
import ProfileMiddleParts from "../../components/profileParts/ProfileMiddleParts";
import ProfileActorResults from "../../components/profileParts/ProfileActorResults";

const actor = () => {
  return (
    <>
      <Layout title={"演出家詳細"}>
        <div style={{ width: "960px" }}>
          <ProfileButton title={"編集する"} />
          <ProfileTopParts />
          <ProfileMiddleParts />
          <ProfileActorResults />
        </div>
      </Layout>
    </>
  );
}

export default actor
