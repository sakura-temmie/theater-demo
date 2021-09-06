const ProfileText = ({name, text}) => {
  return (
    <div className="w-1/2 h-52">
      <div className="w-100% m-3 p-2 shadow-md text-center text-base">{name}</div>
      <div className="w-100% m-3 p-2 shadow-md text-base h-full">{text}</div>
    </div>
  )
}

export default ProfileText
