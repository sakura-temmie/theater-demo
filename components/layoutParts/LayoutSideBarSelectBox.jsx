//演出家、劇場トップのサイドバーに配置する検索用のボックス
//title      => 大枠のタイトル
//subTitle   => サブタイトルを指定
//name       => selectboxのnamwを指定
//optionData => optionに挿入するデータ（配列）

export default function LayoutSideBarSelectBox({
  title,
  subTitle,
  name,
  optionData,
}) {
  return (
    <>
      {/*  大枠のタイトルを受け取る  */}
      <p> {title} </p>
      <div className="container border-gray-400 border border-solid">
        <div className="w-11/12 m-auto mt-2 mb-4">
          <p className="mb-2px">{subTitle}</p>
          <select className="w-full appearance-none border border-blue-400" name={name}>
            {optionData.map((data) => <option key={data.id} value={data.areaName}> {data.areaName} </option>)}
          </select>
        </div>
      </div>
    </>
  )
}
