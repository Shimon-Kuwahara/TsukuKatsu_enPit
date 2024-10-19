// components/CompanyCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CompanyCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 m-4">
      <Image
        src="/test.png"
        alt="Company Group"
        width={400}
        height={200}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div className="flex-grow">
            <p className="font-bold">サイモンさん</p>
            <p className="text-sm text-gray-600">情報科学類/4年（2022年4月入社）</p>
          </div>
          <Link href="https://tsukubaito.com/recruitment/recruitment-2977/" className="bg-purple-500 text-white text-xs text-center p-2 rounded">
            詳細
          </Link>
        </div>
        <h2 className="text-lg font-bold mb-2">VeBuln株式会社</h2>
        <p className="text-gray-800 mb-4">
          インド人も多数！<br />
          働きながら国際交流もできる！！
        </p>
        <Link 
          href="https://tsukubaito.com/recruitment/recruitment-2977/"
          className="bg-purple-600 text-white flex justify-center py-2 rounded"
        >
        この求人について詳しく見る
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
