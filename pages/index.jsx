import Layout from "../components/layoutParts/Layout"
import LayoutDirectorTop from "../components/layoutParts/LayoutDirectorTop"
import LayoutTheaterTop from "../components/layoutParts/LayoutTheaterTop"

export default function Home() {
  return (
    <>
      <Layout title="Top">

        {/* ここにコンテンツを配置していく */}

        {/* トップページはログインユーザーのフラグによって出し分ける */}
        <LayoutTheaterTop />
        <LayoutDirectorTop />

      </Layout>
    </>
  )
}
