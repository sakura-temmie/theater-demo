import LayoutDirectorTopSideBar from "./LayoutDirectorTopSideBar"
import LayoutDirectorTopCardArea from "./LayoutDirectorTopCardArea"

//演出家トップページにコンテンツ
export default function LayoutDirectorTop() {
  {/*  劇場の検索結果を表示するためのダミーデータ  */}
  const api = {
      imgUrl:"https://cdn.osaka-info.jp/page_translation/content/68315856-0b09-11e8-b703-0af0cba29dd8.jpeg",
      theaterName:"帝国劇場",
      maxCapacity:"1000",
      usageAmount:"10000",
      area:"池袋・豊島"
  }
  const dataArray = new Array(30).fill("").map(ele => api)

  {/*  サイドバーのエリア名を表示するためのダミーデータ  */}
  const area = {id:1, areaName: "aaa"}
  const areaArray = new Array(30).fill("").map(ele => area)

  return (
    <>
        <div className="flex w-4/5">
        <LayoutDirectorTopSideBar  areaApi={ areaArray }/>
        <LayoutDirectorTopCardArea theaterApi={ dataArray }/>
        </div>
    </>
  )
}
