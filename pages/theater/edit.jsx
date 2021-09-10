import Layout from "../../components/layoutParts/Layout";
import EditTheaterTop from "../../components/editParts/EditTheaterTop";
import EditTheaterDetail from "../../components/editParts/EditTheaterDetail";

const edit = () => {
  return (
    <>
      <Layout title={"劇場詳細編集"}>
        <div style={{ width: "960px" }}>
          <EditTheaterTop />
          <EditTheaterDetail />
        </div>
      </Layout>
    </>
  );
};

export default edit;
