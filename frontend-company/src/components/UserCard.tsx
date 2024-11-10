import React from "react";
import Image from "next/image";
import { User } from "@/types/user";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex p-6 border rounded-lg shadow-lg mx-6 mb-6 bg-white hover:shadow-xl transition-shadow duration-300">
      <Image
        src="/test.png"
        alt={`${user.name || "User"}'s avatar`}
        width={120}
        height={96}
        className="rounded-full object-cover"
      />
      <div className="pl-6">
        <h2 className="text-2xl font-bold mb-2">
          {user.last_name} {user.first_name}({user.last_name_kana}{" "}
          {user.first_name_kana})
        </h2>
        <div className="grid gap-2">
          <p>{user.gender}</p>
          <p>
            <span>学校情報:</span> {user.university} {user.grade}{" "}
            {user.department}
          </p>
          <p>
            <span>卒業予定年月:</span> {user.graduation_year}年{" "}
            {user.graduation_month}月
          </p>
          <p>
            <span>連絡先:</span> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
