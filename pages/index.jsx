import Layout from "../components/layoutParts/Layout"
import LayoutDirectorTop from "../components/layoutParts/LayoutDirectorTop"
import LayoutTheaterTop from "../components/layoutParts/LayoutTheaterTop"
import Cookie from "universal-cookie";

export default function Home() {

  //クッキーの認証トークンを取得
  (async () => {
    try {
      //クッキーの取得
      const cookie = await new Cookie();
      const accessToken = await cookie.get("access_token")
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}get_user`, {
        method: "POST",
        body: JSON.stringify({
          token: accessToken,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data)
        });
    } catch (err) {
      alert(err);
    }
  })();

  return (
    <>
      <Layout title="Top">

        {/* ここにコンテンツを配置していく */}

        {/* トップページはログインユーザーのフラグによって出し分ける */}
        <LayoutTheaterTop />
        <LayoutDirectorTop />

      </Layout>
    </>
  )
}
