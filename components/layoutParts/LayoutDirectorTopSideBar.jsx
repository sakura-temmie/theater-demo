import LayoutSideBarSearchBox from "./LayoutSideBarSearchBox"
import LayoutSideBarSelectBox from './layoutSideBarSelectBox';

//演出家topページのサイドバーを実装
//横幅は320pxで固定
export default function LayoutDirectorTopSideBar() {
  return (
    <aside className="w-64">
      <div className="border-gray-400 border border-solid p-2">
        <div className="mb-2">
          <LayoutSideBarSearchBox
            title     = "日程"
            inputType = "date"
            name1     = "startDate"
            subTitle1 = "開始日"
            name2     = "endDate"
            subTitle2 = "終了日"
            unit      = ""
          />
        </div>
        <div className="mb-2">
          <LayoutSideBarSelectBox
            title      = "エリア"
            subTitle   = "エリア絞り込み"
            name       = "area"
            optionData={
              [
                {
                  areaName: "aaa",
                  id:1
                },
                {
                  areaName: "bbb",
                  id:2
                }
              ]
            }
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
            unit      = "円"
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
        <button>後でいい感じのボタンに変更する</button>
      </div>
    </aside>
  )
}
