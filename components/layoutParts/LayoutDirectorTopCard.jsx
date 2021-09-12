//演出家トップのコンテンツエリアに配置するカード
//imgUrl        => 劇場のトップ画像のパスを取得
//theaterName   => 劇場名を取得
//maxCapacity   => 劇場のキャパシティ
//usageAmount   => １週間の利用料金
//area          => 劇場の所在地があるエリア
import Link from 'next/link';
import Image from 'next/image';

export default function LayoutDirectorTopCard({
  imgUrl,
  theaterName,
  maxCapacity,
  usageAmount,
  area,
  path
}) {
  return (
    <Link href={path}>
      <div className="shadow-2xl rounded-md w-full">
        <div className="shadow-lg w-72 h-48 object-cover mb-2">
          <Image
            className="shadow-lg w-72 h-48 object-fit mb-2"
            src={imgUrl}
            alt=""
            width={300}
            height={200}
          />
        </div>
        <div className="px-2 pb-2">
          <p className="text-lg"> {theaterName} </p>
          <p> 最大収容人数 : {maxCapacity} 人</p>
          <p> 希望利用額（１週間）: {usageAmount} 万円</p>
          <p> エリア : {area} </p>
        </div>
      </div>
    </Link>
  );
}
