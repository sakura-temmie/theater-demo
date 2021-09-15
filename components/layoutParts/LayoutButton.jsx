import Link from 'next/link';

export default function LayoutButton({ path, title }) {
  return (
    <Link href={path}>
      <a className="text-gray-400 hover:bg-white px-4 py-3 rounded cursor-pointer">
        {title}
      </a>
    </Link>
  );
}
