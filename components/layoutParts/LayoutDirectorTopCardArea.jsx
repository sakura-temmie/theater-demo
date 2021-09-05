import LayoutDirectorTopCard from './LayoutDirectorTopCard';

export default function LayoutDirecterCardArea({theaterApi}) {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {theaterApi.map(api =>
        <div className="mx-auto">
        <LayoutDirectorTopCard
          imgUrl      = { api.imgUrl }
          theaterName = { api.theaterName }
          maxCapacit  = { api.maxCapacity }
          usageAmount = { api.usageAmount }
          area        = { api.area }
          />
        </div>
      )}
    </div>
  )
}
