import ChatMessage from "./ChatMessage"
import MyChatMessage from "./MyChatMessage"
import MessageSendBox from "./MessageSendBox"


const ChatMessageArea = ({ name }) => {
  const meaageAreaStyle = {
    height: "63.4vh"
  }

  return (
    <>
    <div className="w-full px-2 border border-gray-200">
      <p className="w-full text-lg py-2 fixed bg-white"> { name="山田孝之" } </p>
      <div style={meaageAreaStyle} className="w-full  overflow-scroll mt-12">
        <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
          </div>
        <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
          </div>
        <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
          </div>
              <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
          </div>
                  <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
          </div>
                  <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
          </div>
                  <div className="w-full ml-0 mr-auto">
          <ChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
        <div className="w-full mr-0 ml-auto">
          <MyChatMessage time="00:00" message="こんにちはこんにちは" />
        </div>
      </div>
      <MessageSendBox />
    </div>
   </>
  )
}

export default ChatMessageArea
