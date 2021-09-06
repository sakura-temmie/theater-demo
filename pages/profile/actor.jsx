import Layout from "../../components/layoutParts/Layout";
import Image from "next/image";
import testImg from "../../public/test01.jpg"

const actor = () => {
  return (
    <>
      <Layout>
        <div className="" style={{ width: "960px" }}>
          <div className="flex justify-end m-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">編集する</button>
          </div>
          <div className="flex space-x-4 justify-center">
            <div className="w-1/2 h-52">
              <div className="w-100% m-3 p-2 shadow-md text-center text-base">かくまあり</div>
              <div className="w-100% m-3 p-2 shadow-md text-base h-full">自己紹介</div>
            </div>
            <div className="w-1/2">
              <Image className="object-contain h-48 w-full" src={testImg} alt="main Image" />
            </div>
          </div>
          <div className="flex space-x-4 justify-center">
            <div className="w-100% m-3 p-2 shadow-md text-center text-base">希望利用額　【５０万円】</div>
            <div className="w-100% m-3 p-2 shadow-md text-center text-base">空きスケジュール　【1ヶ月以内（要相談）】</div>
          </div>
          <div className="flex justify-center items-center w-100% m-3 p-2 shadow-md text-center text-base">
            <p className="w-full">過去の実績</p>
          </div>
          <div className="flex justify-end m-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">追加する</button>
          </div>

          <div className="justify-center items-center m-3 p-2 shadow-md text-center text-base">
            <div className="flex justify-center items-center m-3 p-2 shadow-md text-center text-base">
              公演名：まありと愉快な仲間達
            </div>
            <div className="flex justify-between m-10">
              <div>
                <p>劇場名：東京芸術劇場コンサートホール</p>
                <p>2021年10月1日〜2021年12月31日</p>
              </div>
              <div>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">252回公演</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">集客率：８０％</span>
              </div>
            </div>
            <div className="flex justify-end m-4">
              <button className="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">作品内容</button>
              <button className="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-3">出演キャスト</button>
            </div>
          </div>
          {/* <div className="justify-center items-center m-3 p-2 shadow-md text-center text-base">
            <div className="flex justify-center items-center m-3 p-2 shadow-md text-center text-base">
              公演名：まありと愉快な仲間達
            </div>
            <div className="flex justify-between m-10">
              <div>
                <p>劇場名：東京芸術劇場コンサートホール</p>
                <p>2021年10月1日〜2021年12月31日</p>
              </div>
              <div>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">252回公演</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">集客率：８０％</span>
              </div>
            </div>
            <div className="flex justify-end m-4">
              <button className="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">作品内容</button>
              <button className="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-3">出演キャスト</button>
            </div>
          </div> */}

        </div>

      </Layout>

    </>
  )
}

export default actor
