import Layout from "../components/layoutParts/Layout"
import ChatSideBar from "../components/chatParts/ChatSideBar"
import ChatMessageArea from "../components/chatParts/ChatMessageArea"

export default function chat() {
  const chatAreaStyle = {
    height : "82vh"
  }
  return (
    <Layout title="Chat">
      <div style={chatAreaStyle} className="w-4/5 mx-auto flex">
        <ChatSideBar />
        <div className="w-full">
          <ChatMessageArea />
        </div>
      </div>
    </Layout>
  )
}
