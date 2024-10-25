"use client";
import React from 'react';

const Mypage = () => {
  // ハードコーディングされたデータ（仮のユーザーデータ）
  const userData = {
    email: 's2210474@u.tsukuba.ac.jp',
    password: '********', // パスワードは非表示
    lastName: '川上',
    firstName: '日菜乃',
    lastNameKana: 'カワカミ',
    firstNameKana: 'ヒナノ',
    gender: '女性',
    faculty: '情報学群',
    department: '情報科学類',
    grade: '3年',
    graduationYear: '2027',
    graduationMonth: '3月',
    postalCode: '305-0821',
    prefecture: '茨城県',
    city: 'つくば市春日',
    phone: '050-9210-6629',
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">マイページ</h1>
      <ul className="space-y-2">
        <li><strong>メールアドレス:</strong> {userData.email}</li>
        <li><strong>姓:</strong> {userData.lastName}</li>
        <li><strong>名:</strong> {userData.firstName}</li>
        <li><strong>姓 (カタカナ):</strong> {userData.lastNameKana}</li>
        <li><strong>名 (カタカナ):</strong> {userData.firstNameKana}</li>
        <li><strong>性別:</strong> {userData.gender}</li>
        <li><strong>学群:</strong> {userData.faculty}</li>
        <li><strong>学類:</strong> {userData.department}</li>
        <li><strong>学年:</strong> {userData.grade}</li>
        <li><strong>卒業予定年度:</strong> {userData.graduationYear}年</li>
        <li><strong>卒業予定月:</strong> {userData.graduationMonth}</li>
        <li><strong>郵便番号:</strong> {userData.postalCode}</li>
        <li><strong>都道府県:</strong> {userData.prefecture}</li>
        <li><strong>市区町村:</strong> {userData.city}</li>
        <li><strong>電話番号:</strong> {userData.phone}</li>
      </ul>
      <div className="mt-4 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          編集する
        </button>
      </div>
    </div>
  );
};

export default Mypage;
