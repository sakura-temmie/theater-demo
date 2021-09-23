import { useState, useEffect } from "react";
import Cookie from "universal-cookie";
import LayoutTheaterTopSideBar from "./LayoutTheaterTopSideBar"
import LayoutTheaterTopCardArea from "./LayoutTheaterTopCardArea"

//演出家トップページにコンテンツ
export default function LayoutTheaterTop() {
  const [profileData, setProfileData] = useState([])

   //初回のみ実行
  useEffect(() => {
    getProfile()
  },[])

  //劇場または演出家のプロフィール一覧を取得
  const getProfile = async () => {
    //クッキーの取得
    try {
      //クッキーの取得
      const accessToken = await new Cookie().get("access_token")
      const path =  "directors"
      await fetch(process.env.NEXT_PUBLIC_RESTAPI_URL + path, {
         method: "GET",
         headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
      }).then(res => {
        return res.json()
      }).then(data => {
        console.log(data.data)
        setProfileData(data.data)
      })
    } catch (err) {
      alert(err)
    }
  }


  return (
    <>
      <div className="flex mt-3">
        <LayoutTheaterTopSideBar />
        <LayoutTheaterTopCardArea
          directorApi={profileData}
          path="/theater/profile"
        />
      </div>
    </>
  );
}
