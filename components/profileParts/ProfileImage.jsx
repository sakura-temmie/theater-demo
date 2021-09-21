import Image from "next/image";
import testImg from "../../public/test01.jpg"

const ProfileImage = () => {
  return (
            <div className="bg-white p-4">
              <Image className="object-contain h-48 w-full" src={testImg} alt="main Image" />
            </div>
  )
}

export default ProfileImage
