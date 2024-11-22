"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axiosConfig';
import Image from 'next/image';
import { ChatRoom } from '@/types/chat_room';

export default function Chats() {
  const router = useRouter();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    fetchChatRooms();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const response = await axios.get<ChatRoom[]>('/chat_rooms');
      // メッセージが未定義の場合はデフォルト値を設定
      const chatRoomsWithMessages = response.data.map((chatRoom) => ({
        ...chatRoom,
        messages: chatRoom.messages || [],
      }));
      setChatRooms(chatRoomsWithMessages);
    } catch (error) {
      console.error('チャットルーム一覧の取得に失敗しました', error);
    }
  };

  const handleChatOpen = (chatRoomId: number) => {
    router.push(`/chats/${chatRoomId}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">チャット一覧</h2>
      <ul className="space-y-4">
        {chatRooms.map((chatRoom) => (
          <li
            key={chatRoom.id}
            className="flex items-center bg-white shadow rounded-lg p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => handleChatOpen(chatRoom.id)}
          >
            {/* ユーザーのプロフィール画像 */}
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={chatRoom.user.image || '/test.png'}
                alt={`${chatRoom.user.first_name} ${chatRoom.user.last_name}さんのプロフィール画像`}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>

            {/* チャットの詳細 */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {chatRoom.user.last_name} {chatRoom.user.first_name}さん
              </h3>
              <p className="text-sm text-gray-600 truncate">
                採用候補者
              </p>
            </div>

            {/* 返信状況 */}
            <div>
              <span
                className={`px-2 py-1 text-sm font-medium rounded-full ${
                  chatRoom.messages.length > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {chatRoom.messages.length > 0 ? '返信済' : '未返信'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
