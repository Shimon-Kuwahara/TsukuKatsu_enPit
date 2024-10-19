import { NextResponse } from 'next/server';

// ダミーデータをAPIから返す
const companies = [
  {
    image: "/test1.png",
    name: "VeBuln株式会社",
    student: {
      name: "サイモンさん",
      info: "情報科学類/4年（2022年4月入社）",
    },
    description: "インド人も多数！\n働きながら国際交流もできる！！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test2.png",
    name: "TechWorks株式会社",
    student: {
      name: "ジョンさん",
      info: "情報工学/3年（2021年4月入社）",
    },
    description: "最新技術を学べる環境！\nスキルアップに最適です！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test3.png",
    name: "Innovatech株式会社",
    student: {
      name: "アリスさん",
      info: "経営学類/2年（2023年4月入社）",
    },
    description: "革新的なプロジェクトに携わるチャンス！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test4.png",
    name: "GlobalSoft株式会社",
    student: {
      name: "ボブさん",
      info: "国際関係学/1年（2024年4月入社）",
    },
    description: "グローバルな職場環境で経験を積む！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test5.png",
    name: "CreativeWorks株式会社",
    student: {
      name: "キャロルさん",
      info: "デザイン学類/3年（2021年4月入社）",
    },
    description: "クリエイティブなプロジェクトで活躍！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test6.png",
    name: "TechFusion株式会社",
    student: {
      name: "デイビッドさん",
      info: "電子工学/4年（2022年4月入社）",
    },
    description: "テクノロジーと融合した革新的な職場！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test7.png",
    name: "EcoGreen株式会社",
    student: {
      name: "エミリーさん",
      info: "環境科学/2年（2023年4月入社）",
    },
    description: "環境に優しいプロジェクトに参加！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test1.png",
    name: "HealthFirst株式会社",
    student: {
      name: "フランクさん",
      info: "健康科学/3年（2021年4月入社）",
    },
    description: "健康を第一に考える職場環境！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test2.png",
    name: "AgriFuture株式会社",
    student: {
      name: "グレイスさん",
      info: "農業科学/1年（2024年4月入社）",
    },
    description: "持続可能な農業に貢献！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test3.png",
    name: "BuildRight株式会社",
    student: {
      name: "ヘンリーさん",
      info: "建築学/4年（2022年4月入社）",
    },
    description: "未来の建築プロジェクトに参加！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test4.png",
    name: "EduBright株式会社",
    student: {
      name: "イザベラさん",
      info: "教育学/2年（2023年4月入社）",
    },
    description: "教育の未来を創造する職場！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test5.png",
    name: "MediaLink株式会社",
    student: {
      name: "ジャックさん",
      info: "メディア学/3年（2021年4月入社）",
    },
    description: "メディア業界でのキャリアを築く！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test6.png",
    name: "FinSecure株式会社",
    student: {
      name: "ケイティさん",
      info: "金融学/4年（2022年4月入社）",
    },
    description: "金融業界でのスキルを活かす！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test7.png",
    name: "BioInnovate株式会社",
    student: {
      name: "ルーカスさん",
      info: "生物学/1年（2024年4月入社）",
    },
    description: "バイオテクノロジー分野での経験を積む！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test1.png",
    name: "SafeNet株式会社",
    student: {
      name: "マディソンさん",
      info: "情報セキュリティ/3年（2021年4月入社）",
    },
    description: "セキュリティ分野でのキャリアを築く！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
  {
    image: "/test2.png",
    name: "FutureEnergy株式会社",
    student: {
      name: "ネイサンさん",
      info: "エネルギー工学/2年（2023年4月入社）",
    },
    description: "再生可能エネルギー分野での経験を積む！",
    detailLink: "https://tsukubaito.com/recruitment/recruitment-2977/",
  },
];


export async function GET() {
  return NextResponse.json(companies);
}
