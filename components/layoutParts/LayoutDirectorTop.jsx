import LayoutDirectorTopSideBar from "./LayoutDirectorTopSideBar"
import LayoutDirectorTopCardArea from "./LayoutDirectorTopCardArea"

//演出家トップページにコンテンツ
export default function LayoutDirectorTop() {
  {/*  劇場の検索結果を表示するためのダミーデータ  */}
  const api = {
      id:1,
      imgUrl:"https://cdn.osaka-info.jp/page_translation/content/68315856-0b09-11e8-b703-0af0cba29dd8.jpeg",
      theaterName:"帝国劇場",
      maxCapacity:"1000",
      usageAmount:"10000",
      area:"池袋・豊島"
  }
  const dataArray = new Array(30).fill("").map(ele => {
    api.id += 1
    return api
  })

  {/*  サイドバーのエリア名を表示するためのダミーデータ  */}
  const area = {id:1, areaName: "aaa"}
  const areaArray = new Array(30).fill("").map(ele => {
    area.id += 1
    return area
  })

  return (
    <>
      <div className="flex mt-3">
        <LayoutDirectorTopSideBar areaApi={areaArray} />
        <LayoutDirectorTopCardArea
          theaterApi={dataArray}
          path="/director/profile"
        />
      </div>
    </>
  );
}
