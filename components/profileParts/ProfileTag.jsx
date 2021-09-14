const ProfileTag = ({text, type}) => {
  return (
    <>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{text} {type}</span>
    </>
  )
}

export default ProfileTag
