import Cookie from "universal-cookie";
import { useState, useEffect } from "react";


export default function apiTest() {
   //クッキーの認証トークンを取得後、ページをセット
  const selectPage1 = async () => {
    //クッキーの取得
    const accessToken = await new Cookie().get("access_token")
    // await setAccessToken(new Cookie().get("access_token"))
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}directors/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: {
          token: accessToken,
          free_schedule: 13,
          area : 22,
          lower_limit_price : 143,
          upper_limit_price : 144,
          lower_limit_capacity : 333,
          upper_limit_capacity : 334,
        }
      }).then(res => {
          if (res.status === 400) {
            throw "authentication failed"
          } else if (res.ok) {
            return res.json()
          }
      }).then(data => {
        console.log("-----------")
        console.log(data)
      })
    } catch (err) {
      alert(err);
      return
    }
  }

  selectPage1()

  return (
    <div>
    </div>
  )
}
