import { useState, useEffect } from "react";
import Cookie from "universal-cookie";
import LayoutDirectorTopSideBar from "./LayoutDirectorTopSideBar"
import LayoutDirectorTopCardArea from "./LayoutDirectorTopCardArea"

//演出家トップページにコンテンツ
export default function LayoutDirectorTop() {
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
      const path =  "theaters"
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
        setProfileData(data.data)
      })
    } catch (err) {
      alert(err)
    }
  }

  {/*  サイドバーのエリア名を表示するためのダミーデータ  */}
  const area = {id:1, areaName: "aaa"}
  const areaArray = new Array(30).fill("").map(ele => {
    area.id += 1
    return area
  })

  return (
    <>
      <div className="flex mt-3">
        <LayoutDirectorTopSideBar areaApi={areaArray} />
        <LayoutDirectorTopCardArea
          theaterApi={profileData}
          path="/director/profile"
        />
      </div>
    </>
  );
}
