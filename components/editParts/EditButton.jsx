const EditButton = ({title}) => {
  return (
    <div className="flex justify-end m-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">{title}</button>
    </div>
  )
}

export default EditButton
