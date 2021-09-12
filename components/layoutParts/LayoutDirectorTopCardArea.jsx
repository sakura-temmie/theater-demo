// import LayoutDirectorTopCard from './LayoutDirectorTopCard';

export default function LayoutDirecterCardArea({theaterApi,path}) {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {/* {theaterApi.map(api =>
        <div className="mx-auto">
          <LayoutDirectorTopCard
            key         = { api.id }
            imgUrl      = { api.imgUrl }
            theaterName = { api.theaterName }
            maxCapacity = { api.maxCapacity }
            usageAmount = { api.usageAmount }
            area        = {api.area}
            path        = {path}
          />
        </div> */}
      {/* )} */}
    </div>
  )
}
