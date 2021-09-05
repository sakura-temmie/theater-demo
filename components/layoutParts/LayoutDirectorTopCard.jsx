//演出家トップのコンテンツエリアに配置するカード
//imgUrl        => 劇場のトップ画像のパスを取得
//theaterName   => 劇場名を取得
//maxCapacity   => 劇場のキャパシティ
//usageAmount   => １週間の利用料金
//area          => 劇場の所在地があるエリア

export default function LayoutDirectorTopCard({
  imgUrl,
  theaterName,
  maxCapacity,
  usageAmount,
  area
}) {
  return (
    <div className="border border-gray-400 w-full">
      <img className="w-full h-48" src={imgUrl} alt="" />
      <div>
        <p> 劇場名 : {theaterName} </p>
        <p> 最大収容人数 : {maxCapacity} </p>
        <p> 希望利用額（１週間）: {usageAmount} </p>
        <p> エリア : {area} </p>
      </div>
    </div>
  )
}
