import LayoutSideBarSearchBox from "./LayoutSideBarSearchBox"
import LayoutSideBarSelectBox from './LayoutSideBarSelectBox';

//演出家topページのサイドバーを実装
//横幅はw-64で固定
export default function LayoutDirectorTopSideBar({areaApi}) {

  return (
    <aside className="w-72">
      <form>
        <div className="border-gray-400 border border-solid p-2">
          <div className="mb-2">
            <LayoutSideBarSelectBox
              title      = "カレンダー"
              subTitle   = "日程で絞り込み"
              name       = "month"
              optionData = {[]}
            />
          </div>
          <div className="mb-2">
            <LayoutSideBarSelectBox
              title      = "エリア"
              subTitle   = "地域で絞り込み"
              name       = "area"
              optionData = {areaApi}
            />
          </div>
          <div className="mb-2">
            <LayoutSideBarSearchBox
              title     = "使用料"
              inputType = "number"
              name1     = "minCost"
              subTitle1 = "下限"
              name2     = "maxCost"
              subTitle2 = "上限"
              unit      = "万円"
            />
          </div>
          <div className="mb-2">
            <LayoutSideBarSearchBox
              title     = "キャパシティ"
              inputType = "number"
              name1     = "minCapacity"
              subTitle1 ="下限"
              name2     = "maxCapacity"
              subTitle2 = "上限"
              unit      = "人"
            />
          </div>
          <div className="w-1/2 mx-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-full h-8 mt-3">検索</button>
          </div>
        </div>
      </form>
    </aside>
  )
}
