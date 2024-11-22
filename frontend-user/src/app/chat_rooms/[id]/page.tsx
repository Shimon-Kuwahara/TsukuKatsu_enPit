"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "@/utils/axiosConfig";
import { ChatRoom } from "@/types/chat_room";
import Image from "next/image";

const ChatRoomPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
  const [messageContent, setMessageContent] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fetchChatRoom = useCallback(async () => {
    try {
      const response = await axios.get<ChatRoom>(`/chat_rooms/${id}`);
      setChatRoom(response.data);
    } catch (error) {
      console.error("チャットルームの取得に失敗しました", error);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchChatRoom();
    }
  }, [id, fetchChatRoom]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatRoom?.messages]);

  const sendMessage = async () => {
    if (!messageContent.trim()) return;
    try {
      await axios.post(`/chat_rooms/${id}/messages`, {
        message: {
          content: messageContent,
        },
      });
      setMessageContent("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.overflowY = "hidden";
      }
      fetchChatRoom();
    } catch (error) {
      console.error("メッセージの送信に失敗しました", error);
    }
  };

  if (!chatRoom) return <div className="text-center">読み込み中...</div>;

  return (
    <div className="flex flex-col h-screen">
      {/* ヘッダー部分 */}
      <div className="p-4 flex items-center border-b">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
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
        {chatRoom.company && (
          <div className="flex items-center ml-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src={chatRoom.company.logo_url || "/test1.png"}
                alt={`${chatRoom.company.name} logo`}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xl font-bold ml-2">
              {chatRoom.company.name}
            </span>
          </div>
        )}
      </div>

      {/* メッセージ表示部分 */}
      <div className="flex-1 overflow-y-auto px-4" style={{ paddingBottom: "80px" }}>
        {chatRoom.messages?.length ? (
          chatRoom.messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender_type === "User" ? "text-right" : "text-left"
              }`}
            >
              {message.sender_type === "Company" && (
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={chatRoom.company.logo_url || "/test1.png"}
                      alt={`${chatRoom.company.name} logo`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-xs font-bold ml-2">
                    {chatRoom.company.name}
                  </span>
                </div>
              )}
              <div
                className={`inline-block max-w-xs text-sm p-2 rounded-lg ${
                  message.sender_type === "User"
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
        <div ref={messagesEndRef} />
      </div>

      {/* メッセージ入力部分 */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 border-t bg-white"
        style={{ height: "80px" }}
      >
        <div className="flex h-full">
          <textarea
            ref={textareaRef}
            value={messageContent}
            onChange={(e) => {
              setMessageContent(e.target.value);
              if (textareaRef.current) {
                const maxHeight = 150;
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                if (textareaRef.current.scrollHeight > maxHeight) {
                  textareaRef.current.style.height = `${maxHeight}px`;
                  textareaRef.current.style.overflowY = "scroll";
                } else {
                  textareaRef.current.style.overflowY = "hidden";
                }
              }
            }}
            placeholder="メッセージを入力"
            className="flex-1 border bg-gray-200 rounded-l-lg p-2 focus:outline-none resize-none"
            rows={1}
            style={{ maxHeight: "150px" }}
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
