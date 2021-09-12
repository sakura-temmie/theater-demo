// import LayoutTheaterTopCard from './LayoutTheaterTopCard';

export default function LayoutTheaterCardArea({actorApi,path}) {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {/* {actorApi.map(api =>
        <div className="mx-auto">
          <LayoutTheaterTopCard
            key         = { api.id }
            imgUrl      = { api.imgUrl }
            name        = { api.name }
            totalNumberPerformances = { api.totalNumberPerformances  }
            currentPerformance      = {api.currentPerformance}
            path        = {path}
          />
        </div>
      )} */}
    </div>
  )
}
