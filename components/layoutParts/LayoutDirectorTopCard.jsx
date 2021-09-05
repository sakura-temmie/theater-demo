//演出家トップのコンテンツエリアに配置するカード
//imgUrl,theaterName,maxCapacity,usageAmount,area

export default function LayoutDirectorTopCard(imgUrl) {
  return (
    <div className="border border-gray-400 w-1/4">
      <img className="w-full h-48" src={imgUrl} alt="" />
      <div>
        {/* <p> {theaterName} </p>
        <p> {maxCapacity} </p>
        <p> {usageAmount} </p>
        <p> {area} </p> */}
      </div>
    </div>
  )
}
