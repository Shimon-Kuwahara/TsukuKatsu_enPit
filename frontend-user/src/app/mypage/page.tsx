"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { User } from "../../types/user";
import UserBasicInfoCard from "../../components/elements/UserBasicInfoCard";
import UserSchoolInfoCard from "../../components/elements/UserSchoolInfoCard";
import UserSelfPRCard from "../../components/elements/UserSelfPRCard";
import UserExperienceCard from "../../components/elements/UserExperienceCard";

import UserBasicInfoUpdateModal from "../../components/modal/UserBasicInfoUpdateModal";

const MyPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalType, setModalType] = useState<"basic" | "school" | "selfPR" | "experience" | null>(null);
  const router = useRouter();
  const closeModal = () => setModalType(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}mypage`, {
          withCredentials: true,
          headers: {
            "access-token": Cookies.get("access-token"),
            client: Cookies.get("client"),
            uid: Cookies.get("uid"),
          },
        });
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.error("ユーザー情報の取得に失敗しました:", error);
        router.push("/sign_in");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  // User情報の更新処理
  const handleSave = async (updateData: Partial<User>) => {
    if (!user) {
      return;
    }
    try {
      const responce = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}users/${user.id}`,
        { user: updateData },
        {
          withCredentials: true,
          headers: {
            "access-token": Cookies.get("access-token"),
            client: Cookies.get("client"),
            uid: Cookies.get("uid"),
          },
        }
    );
    console.log(responce);
    setUser({ ...user, ...updateData });
    } catch (error) {
      console.error("ユーザー情報の更新に失敗しました:", error);
    } finally {
      closeModal();
    }
  };

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (!user) {
    return <div>ユーザー情報が取得できません。</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      {/* カードコンテナ */}
      <div className="flex flex-col gap-6 max-w-lg w-full">
        {/* 基本情報 */}
        <UserBasicInfoCard user={user} onEdit={() => setModalType("basic")} />

        {/* 学校情報 */}
        <UserSchoolInfoCard user={user} onEdit={() => setModalType("school")} />

        {/* 自己PR */}
        <UserSelfPRCard user={user} onEdit={() => setModalType("selfPR")}/>

        {/* 経験 */}
        <UserExperienceCard user={user} onEdit={() => setModalType("experience")} />

      </div>

      {/* モーダル */}
      {modalType === "basic" && (
        <UserBasicInfoUpdateModal
          user={user}
          onClose={closeModal}
          onSave={(updateData) => handleSave(updateData)}
        />
      )}
    </div>
  );
};

export default MyPage;
