//演出家、劇場トップのサイドバーに配置する検索用のボックス
//title     => 大枠のタイトル
//inputType => inputのタイプを指定
//name1     => 上段のinputTypeのnameを指定
//subTitle1 => 上段のタイトルを指定
//name2     => 下段のinputTypeのnameを指定
//subTitle2 => 下段のタイトルを指定
//unit      => 単位名を指定

export default function LayoutSideBarSearchBox({
  title,
  inputType,
  name1,
  subTitle1,
  name2,
  subTitle2,
  unit = "",
}) {
  //unitに値が返されたらspanタグを挿入する
  const span = unit !== "" ? <span> {unit} </span> : null

  //inputTypeがdateの場合のみinputのwidthを100%にする
  const inputClass = inputType === "date" ? "w-full" : "w-10/12 text-right"

  return (
    <>
      {/*  大枠のタイトルを受け取る  */}
      <p> {title} </p>
      <div className="container border-gray-400 border border-solid">
        {/*  上段  */}
        <div className="w-11/12 border-b border-blue-400 m-auto my-1">
          <p className="mb-2px">{subTitle1}</p>
          <input className={inputClass} type={inputType} name={name1} />
          { span }
        </div>
        <p className="text-center">〜</p>
        {/*  下段  */}
        <div className="w-11/12 border-b border-blue-400 m-auto mb-2">
          <p className="mb-2px">{ subTitle2 }</p>
          <input className={inputClass}  type={inputType} name={name2}/>
          { span }
        </div>
      </div>
    </>
  )
}