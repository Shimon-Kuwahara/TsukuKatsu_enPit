"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "@/utils/axiosConfig";
import { ChatRoom } from "@/types/chat_room";
import { Message } from "@/types/message";

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
      // axiosではなくaxiosInstanceを使用
      await axios.post(`/chat_rooms/${id}/messages`, {
        message: {
          content: messageContent,
        },
      });
      setMessageContent("");
      fetchChatRoom(); // メッセージ一覧を再取得
    } catch (error) {
      console.error("メッセージの送信に失敗しました", error);
    }
  };

  if (!chatRoom) return <div>読み込み中...</div>;

  return (
    <div>
      <h2>
        {chatRoom.company
          ? `${chatRoom.user.first_name} ${chatRoom.user.last_name}とのチャット`
          : "名なし"}
      </h2>
      <div>
        {chatRoom.messages ? (
          chatRoom.messages.map((message: Message) => (
            <div key={message.id}>
              <p>
                <strong>
                  {message.sender_type === "User"
                    ? chatRoom.user.first_name
                    : chatRoom.company.name}
                  :
                </strong>{" "}
                {message.content}
              </p>
              <span>{new Date(message.created_at).toLocaleString()}</span>
            </div>
          ))
        ) : (
          <p>メッセージはありません</p>
        )}
      </div>
      <div>
        <input
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="メッセージを入力"
        />
        <button onClick={sendMessage}>送信</button>
      </div>
    </div>
  );
};

export default ChatRoomPage;
