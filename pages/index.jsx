import Layout from "../components/layoutParts/Layout"
import LayoutDirectorTopSideBar from "../components/layoutParts/LayoutDirectorTopSideBar"
import LayoutDirectorTopCardArea from "../components/layoutParts/LayoutDirectorTopCardArea"

export default function Home() {
  return (
    <>
      <Layout title="Top">
        <div className="flex w-full">
        <LayoutDirectorTopSideBar />
        <LayoutDirectorTopCardArea />
        </div>
        {/* <p className="text-4xl">ここにコンテンツを配置していく</p> */}
      </Layout>
    </>
  )
}
