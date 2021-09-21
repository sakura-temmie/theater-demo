import Link from "next/link";

export default function ProfileButton({ path, title }) {
  return (
    <Link href={path}>
      <div className="flex justify-end m-4">
        <a className="bg-yellow-400 hover:bg-yellow-500 text-white text-center font-bold py-2 px-4 rounded w-40 cursor-pointer">
          {title}
        </a>
      </div>
    </Link>
  );
}

// export default ProfileButton
