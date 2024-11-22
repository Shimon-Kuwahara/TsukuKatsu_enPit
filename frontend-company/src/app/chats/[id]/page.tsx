"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "@/utils/axiosConfig";
import { ChatRoom } from "@/types/chat_room";
import { Message } from "@/types/message";
import Image from "next/image";

const ChatRoomPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
  const [messageContent, setMessageContent] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      fetchChatRoom();
    }
  }, [id]);

  useEffect(() => {
    // メッセージリストの末尾にスクロール
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatRoom?.messages]);

  const fetchChatRoom = async () => {
    try {
      const response = await axios.get<ChatRoom>(`/chat_rooms/${id}`);
      setChatRoom(response.data);
    } catch (error) {
      console.error("チャットルームの取得に失敗しました", error);
    }
  };

  const sendMessage = async () => {
    if (!messageContent.trim()) return;
    try {
      await axios.post(`/chat_rooms/${id}/messages`, {
        message: {
          content: messageContent,
        },
      });
      setMessageContent("");
      fetchChatRoom(); // メッセージ送信後に更新
    } catch (error) {
      console.error("メッセージの送信に失敗しました", error);
    }
  };

  if (!chatRoom) return <div className="text-center">読み込み中...</div>;

  return (
    <div className="flex flex-col h-screen mx-auto">
      {/* ヘッダー部分 */}
      <div className="p-4 flex items-center">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {/* 戻るボタンのアイコン */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {chatRoom.user && (
          <div className="flex items-center ml-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src={chatRoom.user.image || "/test.png"}
                alt={`${chatRoom.user.first_name} ${chatRoom.user.last_name}さんのプロフィール画像`}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xl font-bold ml-2">
              {chatRoom.user.last_name} {chatRoom.user.first_name}
            </span>
          </div>
        )}
      </div>

      {/* メッセージ表示部分 */}
      <div className="flex-1 overflow-y-auto px-4">
        {chatRoom.messages?.length ? (
          chatRoom.messages.map((message: Message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender_type === "Company" ? "text-right" : "text-left"
              }`}
            >
              {/* ユーザーのメッセージの場合、プロフィール画像と名前を表示 */}
              {message.sender_type === "User" && (
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={chatRoom.user.image || "/test.png"}
                      alt={`${chatRoom.user.first_name} ${chatRoom.user.last_name}さんのプロフィール画像`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-xs font-bold ml-2">
                    {chatRoom.user.last_name} {chatRoom.user.first_name}
                  </span>
                </div>
              )}

              {/* メッセージ内容 */}
              <div
                className={`inline-block max-w-xs text-sm p-2 rounded-lg ${
                  message.sender_type === "Company"
                    ? "bg-sub-col text-white text-left"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{message.content}</p>
              </div>
              <span className="block text-xs mt-1 text-gray-500">
                {new Date(message.created_at).toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">メッセージはありません</p>
        )}
        {/* スクロール用のダミー要素 */}
        <div ref={messagesEndRef} />
      </div>

      {/* メッセージ入力部分 */}
      <div className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="メッセージを入力"
            className="flex-1 border bg-gray-200 rounded-l-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={sendMessage}
            className="bg-sub-col text-white px-4 py-2 rounded-r-lg hover:bg-blue-300"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomPage;
