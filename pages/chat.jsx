import { useState } from 'react'
import Cookie from "universal-cookie";
import Layout from "../components/layoutParts/Layout"
import ChatSideBar from "../components/chatParts/ChatSideBar"
import ChatMessageArea from "../components/chatParts/ChatMessageArea"
import MessageSendBox from "../components/chatParts/MessageSendBox"

export default function chat() {

  //サイドバーに表示するチャットしたことあるユーザー一覧
  const [chatUser, setChatUser] = useState("")
  const [myID, setMyID] = useState("")

  //自分のユーザー情報を取得する
  const myUserData = async () => {
    //クッキーの取得
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aGVhdGVyLWNoZWNrLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzQ4OTUxMywiZXhwIjoxNjMzNTc1OTEzLCJuYmYiOjE2MzM0ODk1MTMsImp0aSI6IlVzZ0R6Q1hYY3U4WlNnS2IiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hP5zNl1LVBkIYD3BSF_3dURLvgXovYwoA67Y1Fq0cXU"
    // const accessToken = await new Cookie().get("access_token")
    // await setAccessToken(new Cookie().get("access_token"))
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}messages/users`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
      }).then(res => {
          if (res.status === 400) {
            throw "authentication failed"
          } else if (res.ok) {
            return res.json()
          }
      }).then(data => {
        console.log(data)
      })
    } catch (err) {
      alert(err);
      return
    }
  }

  //チャットのやり取りしたことがある人を取得
  const getChatUser = async () => {
    //クッキーの取得
    const accessToken = await new Cookie().get("access_token")
    // const accessToken = await new Cookie().get("access_token")
    // await setAccessToken(new Cookie().get("access_token"))
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}messages/users`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
      }).then(res => {
          if (res.status === 400) {
            throw "authentication failed"
          } else if (res.ok) {
            return res.json()
          }
      }).then(data => {
        console.log(data)
      })
    } catch (err) {
      alert(err);
      return
    }
  }

   getChatUser()

  const chatAreaStyle = {
    height : "80vh"
  }
  return (
    <Layout title="Chat">
      <div style={chatAreaStyle} className="w-4/5 mx-auto flex">
        <div className="w-1/3 h-full overflow-scroll">
          <ChatSideBar />
        </div>
        <div className="w-full">
          <div className="w-full text-lg bg-white mb-2">
            山田孝之
          </div>
          <div className="h-4/5 overflow-scroll">
            <ChatMessageArea />
          </div>
          <MessageSendBox />
        </div>
      </div>
    </Layout>
  )
}
