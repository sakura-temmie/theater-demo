const MessageSendBox = ({ }) => {
  return (
    <div className="flex w-full border-t border-gray-200">
      <textarea placeholder="メッセージを入力" name="message" className="my-1 w-5/6 h-16 appearance-none" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-1/2 w-24 m-auto">
          送信
      </button>
    </div>
  )
}

export default MessageSendBox
