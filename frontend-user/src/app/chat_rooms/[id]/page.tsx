"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "@/utils/axiosConfig";
import { ChatRoom } from "@/types/chat_room";
import Image from "next/image";

const ChatRoomPage: React.FC = () => {
  const { id } = useParams();
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
  const [messageContent, setMessageContent] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetchChatRoom();
    }
  }, [id]);

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
      fetchChatRoom(); // Refresh messages after sending
    } catch (error) {
      console.error("メッセージの送信に失敗しました", error);
    }
  };

  if (!chatRoom) return <div className="text-center">読み込み中...</div>;

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Company Information */}
      {chatRoom.company && (
        <div className="border-b pb-4 mb-4">
          <div className="flex items-center">
            <Image
              src={chatRoom.company.logo_url || "/placeholder-logo.png"}
              alt={`${chatRoom.company.name} logo`}
              width={60}
              height={60}
              className="rounded"
            />
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-800">
                {chatRoom.company.name}
              </h1>
              <p className="text-sm text-gray-600">{chatRoom.company.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="border rounded-lg shadow p-4 bg-gray-50 h-[60vh] overflow-y-auto">
        {chatRoom.messages?.length ? (
          chatRoom.messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.sender_type === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-2 rounded-lg ${
                  message.sender_type === "User"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{message.content}</p>
                <span className="block text-xs mt-1 text-gray-500">
                  {new Date(message.created_at).toLocaleString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">メッセージはありません</p>
        )}
      </div>

      {/* Message Input */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="メッセージを入力"
          className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          送信
        </button>
      </div>
    </div>
  );
};

export default ChatRoomPage;
