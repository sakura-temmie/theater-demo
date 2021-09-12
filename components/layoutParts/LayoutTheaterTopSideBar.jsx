// import LayoutSideBarSearchBox from "./LayoutSideBarSearchBox"
// import LayoutSideBarSelectBox from './LayoutSideBarSelectBox';

//劇場topページのサイドバーを実装
//横幅はw-64で固定

export default function LayoutTheaterTopSideBar() {

  return (
    <aside className="w-72">
      <form>
        <div className="border-gray-400 border border-solid p-2">
          <div className="mb-2">
            {/* <LayoutSideBarSelectBox
              title      = "カレンダー"
              subTitle   = "日程で絞り込み"
              name       = "month"
              optionData = {[]}
            /> */}
          </div>
          <div className="w-1/2 mx-auto">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-full h-8 mt-3">検索</button>
          </div>
        </div>
      </form>
    </aside>
  )
}
