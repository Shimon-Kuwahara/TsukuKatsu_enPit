import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CompanyCardProps = {
  companyImage: string;
  companyName: string;
  userName: string;
  userInfo: string;
  companyDescription: string;
  detailLink: string;
};

const CompanyCard: React.FC<CompanyCardProps> = ({ 
  companyImage, 
  companyName, 
  userName, 
  userInfo, 
  companyDescription, 
  detailLink 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 m-4 w-[400px] h-[450px] flex flex-col">
      <div className="h-48 w-full mb-4">
        <Image
          src={companyImage}
          alt="Company Group"
          width={400}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div className="flex-grow">
            <p className="font-bold">{userName}</p>
            <p className="text-sm text-gray-600">{userInfo}</p>
          </div>
          <Link href={detailLink} className="bg-purple-500 text-white text-xs text-center p-2 rounded">
            詳細
          </Link>
        </div>
        <h2 className="text-lg font-bold mb-2">{companyName}</h2>
        <p className="text-gray-800 mb-4 overflow-hidden line-clamp-3">
          {companyDescription}
        </p>
      </div>
      <Link 
        href={detailLink}
        className="bg-purple-600 text-white flex justify-center py-2 rounded mt-auto"
      >
        この求人について詳しく見る
      </Link>
    </div>
  );
};

export default CompanyCard;
