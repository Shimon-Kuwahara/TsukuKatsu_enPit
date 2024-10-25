"use client";
import { useState, FormEvent } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    gender: '',
    faculty: '',
    department: '',
    grade: '',
    graduationYear: '',
    graduationMonth: '',
    postalCode: '',
    prefecture: '',
    city: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8">
      <div className="mb-4">
        <label className="block text-gray-700">大学のメールアドレス</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="大学のメールアドレスを入力してください"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">パスワード</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">姓</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">名</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">姓 (カタカナ)</label>
          <input
            type="text"
            name="lastNameKana"
            value={formData.lastNameKana}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">名 (カタカナ)</label>
          <input
            type="text"
            name="firstNameKana"
            value={formData.firstNameKana}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">性別</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">選択してください</option>
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">学群</label>
        <select
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">選択してください</option>
          <option value="人文・文化学群">人文・文化学群</option>
          <option value="社会・国際学群">社会・国際学群</option>
          <option value="情報学群">情報学群</option>
          <option value="生命環境学群">生命環境学群</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">学類</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">学年</label>
        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">選択してください</option>
          <option value="1">1年</option>
          <option value="2">2年</option>
          <option value="3">3年</option>
          <option value="4">4年</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">卒業予定年度</label>
        <select
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">選択してください</option>
          <option value="2024">2024年</option>
          <option value="2025">2025年</option>
          <option value="2026">2026年</option>
          <option value="2027">2027年</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">卒業予定月</label>
        <select
          name="graduationMonth"
          value={formData.graduationMonth}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">選択してください</option>
          <option value="1">1月</option>
          <option value="2">2月</option>
          <option value="3">3月</option>
          <option value="4">4月</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">郵便番号</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="305-0821"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">都道府県</label>
        <input
          type="text"
          name="prefecture"
          value={formData.prefecture}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="茨城県"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">市区町村</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="つくば市春日"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">電話番号</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="050-9210-6629"
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          登録
        </button>
      </div>
    </form>
  );
};

export default Signup;
