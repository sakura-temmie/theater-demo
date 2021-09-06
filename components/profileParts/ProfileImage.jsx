import Image from "next/image";
import testImg from "../../public/test01.jpg"

const ProfileImage = () => {
  return (
            <div className="w-1/2">
              <Image className="object-contain h-48 w-full" src={testImg} alt="main Image" />
            </div>
  )
}

export default ProfileImage
