import Layout from "../../components/layoutParts/Layout";
import EditTheatreTop from "../../components/editParts/EditTheatreTop";
import EditTheatreDetail from "../../components/editParts/EditTheatreDetail";

const theatreEdit = () => {
  return (
    <>
      <Layout title={"劇場詳細編集"}>
        <div style={{ width: "960px" }}>
          <EditTheatreTop />
          <EditTheatreDetail />
        </div>
      </Layout>
    </>
  );
};

export default theatreEdit;
