import Head from 'next/head';
import Link from 'next/link';
import LayoutButton from "./LayoutButton";

//childrenはインポート先でラップしてる全てのコンテンツが入ってくる
//titleはLayoutが呼び出された時にページから特定のタイトルを受け取る
export default function Layout({ children, title }) {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        {/* プロップスで渡された値を動的に受け取る */}
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-100 w-screen">
          <div className="flex items-center pl-8 h-24">
            <div className="container flex justify-between mx-auto">
              <Link href="/">
                <a className="text-gray-500 bg-white hover:bg-white px-4 py-3 rounded">
                  Logo
                </a>
              </Link>
              <div className="px-4 py-3 space-x-4">
                <LayoutButton path="/" title="演出家を探す" />
                <LayoutButton path="/" title="メッセージ" />
                <LayoutButton path="/director/profile" title="プロフィール" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen mt-4 w-4/5">
        {children}
        {/* <div style={{ width: 960 }}>{children}</div> */}
      </main>
    </div>
  );
}
