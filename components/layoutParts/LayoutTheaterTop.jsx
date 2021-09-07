import LayoutTheaterTopSideBar from "./LayoutTheaterTopSideBar"
import LayoutTheaterTopCardArea from "./LayoutTheaterTopCardArea"

//演出家トップページにコンテンツ
export default function LayoutTheaterTop() {
  {/*  劇場の検索結果を表示するためのダミーデータ  */}
  const api = {
      id:1,
      imgUrl:"https://img.stardust.co.jp/upload/talent/photo/1/182.H.jpg",
      name:"山田孝之",
      totalNumberPerformances:"1000",
      currentPerformance : "〇〇公演",
  }

  const dataArray = new Array(30).fill("").map(ele => {
    api.id += 1
    return api
  })

  return (
    <>
        <div className="flex w-4/5 mt-3">
          <LayoutTheaterTopSideBar />
          <LayoutTheaterTopCardArea actorApi={ dataArray } path="/profile/actor" />
        </div>
    </>
  )
}
