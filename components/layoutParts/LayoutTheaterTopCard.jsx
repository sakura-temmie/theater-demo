//演出家トップのコンテンツエリアに配置するカード
//imgUrl        => 劇場のトップ画像のパスを取得
//theaterName   => 劇場名を取得
//maxCapacity   => 劇場のキャパシティ
//usageAmount   => １週間の利用料金
//area          => 劇場の所在地があるエリア
import Link from 'next/link'

export default function LayoutDirectorTopCard({
  imgUrl,
  name,
  totalNumberPerformances,
  currentPerformance,
  path
}) {
  return (
    <Link href={path}>
      <div className="shadow-lg w-full">
        <img className="shadow-lg w-72 h-48 object-cover mb-2" src={imgUrl} alt="" />
        <div className="px-2 pb-2">
          <p className="text-xl"> { name } </p>
          <p> 通算公演数 : {totalNumberPerformances} 公演</p>
          <p> 最近の公演 : {currentPerformance} </p>
        </div>
      </div>
    </Link>
  )
}
