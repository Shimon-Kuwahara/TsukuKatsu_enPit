"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axiosConfig';
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
      setChatRooms(response.data);
    } catch (error) {
      console.error('チャットルーム一覧の取得に失敗しました', error);
    }
  };

  return (
    <div>
      <div className="font-bold text-xl p-12">チャット一覧</div>
      <ul>
        {chatRooms.map((chatRoom) => (
          <li key={chatRoom.id}>
            <a onClick={() => router.push(`/chats/${chatRoom.id}`)}>
              {chatRoom.user.last_name} {chatRoom.user.first_name}さんとのチャット
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
