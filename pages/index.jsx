import Layout from "../components/layoutParts/Layout"
import LayoutDirectorTop from "../components/layoutParts/LayoutDirectorTop"

export default function Home() {
  return (
    <>
      <Layout title="Top">
        <LayoutDirectorTop />
        {/* <p className="text-4xl">ここにコンテンツを配置していく</p> */}
      </Layout>
    </>
  )
}
