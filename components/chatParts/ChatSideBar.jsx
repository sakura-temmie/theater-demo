import ChatSideBarCard from "./ChatSideBarCard";

const ChatSideBar = ({ }) => {
  return (
    <div className="w-full">
      {
        <ChatSideBarCard
          imageIconPath="https://img.stardust.co.jp/upload/talent/photo/1/182.H.jpg"
          name="山田孝之"
        />
      }
    </div >
  )
}

export default ChatSideBar
