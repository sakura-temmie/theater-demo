import LayoutDirectorTopCard from './LayoutDirectorTopCard';

export default function LayoutDirecterCardArea({ theaterApi, path }) {
  const imgPath = "https://theater-check.s3.ap-northeast-1.amazonaws.com/"
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {
        theaterApi.map(api =>
          <div className="mx-auto">
            <LayoutDirectorTopCard
              key         = { api.id }
              imgUrl      = { imgPath + api.main_photo }
              theaterName = { api.name }
              maxCapacity = { api.theater?.capacity }
              usageAmount = { api.theater?.price }
              area        = {api.theater?.area}
              path        = {path}
            />
          </div>
        )
      }
    </div>
  )
}
