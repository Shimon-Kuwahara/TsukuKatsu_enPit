import { Recruitment } from "@/types/recruitment";
import Image from "next/image";
import {
  Calendar,
  Clock,
  GraduationCap,
  Tag,
  Wallet,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

type RecruitmentDetailsProps = {
  recruitment: Recruitment;
};

export default function RecruitmentDetails({
  recruitment,
}: RecruitmentDetailsProps) {
  // company が存在する場合のみ表示
  const company = recruitment.company;
  const steps = [
    { number: "01", title: "面接" },
    { number: "02", title: "1ヶ月研修" },
    { number: "03", title: "最終面接" },
    { number: "04", title: "結果通知" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      {/* 見出しセクション */}
      <section className="flex items-center justify-between bg-main-col p-4 text-white rounded-t-lg">
        <h1 className="text-xl font-bold">現在の求人情報</h1>
      </section>
      <span className="text-sm text-right py-2 block">
        更新日: {recruitment.updated_at}
      </span>

      {/* 会社画像など全体をまとめるコンテナ */}
      <div className="space-y-6">
        {/* 会社イメージ */}
        <section className="rounded-lg p-4">
          <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Techouse office with team members"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 求人概要 */}
        <section className="rounded-lg p-4 space-y-4">
          <h2 className="text-main-col text-xl font-bold mb-2">求人概要</h2>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
              <span className="text-gray-500 text-sm">求人ロゴ</span>
            </div>
            <h3 className="text-2xl font-bold">{company?.name || "株式会社Techouse"}</h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {company?.description ||
              "人材プラットフォームの提供を主軸に行う企業。国内主要都市に数ヶ所の事業拠点を持ち、人材プラットフォームの提供を行う。主力製品に「クラウドハウス採用」などがある。"}
          </p>
          <h4 className="font-bold leading-tight">{recruitment.description}</h4>
        </section>

        {/* 業界・職種など */}
        <section className="rounded-lg p-4">
          <div className="grid grid-cols-1 gap-4">
            {/* 業界 */}
            <div className="flex items-center">
              <div className="w-20 bg-gray-300 p-2 flex items-center justify-center rounded">
                <span className="font-bold">業界</span>
              </div>
              <div className="text-sm ml-4">IT</div>
            </div>

            {/* 職種 */}
            <div className="flex items-center">
              <div className="w-20 bg-gray-300 p-2 flex items-center justify-center rounded">
                <span className="font-bold">職種</span>
              </div>
              <div className="text-sm ml-4">Webエンジニア</div>
            </div>
          </div>
        </section>

        {/* 採用条件 */}
        <section className="rounded-lg p-4 space-y-4">
          <h2 className="text-main-col text-xl font-bold mb-2">採用条件</h2>

          <div className="space-y-4">
            {/* 勤務期間 */}
            <div className="flex items-center border-b pb-4">
              <Calendar className="w-6 h-6 text-main-col mr-4" />
              <span className="text-lg">6ヶ月〜</span>
            </div>

            {/* 勤務時間 */}
            <div className="flex items-center border-b pb-4">
              <Clock className="w-6 h-6 text-main-col mr-4" />
              <span className="text-lg">20h〜 / 週 3h〜 / 日</span>
            </div>

            {/* 時給 */}
            <div className="flex items-center border-b pb-4">
              <Wallet className="w-6 h-6 text-main-col mr-4" />
              <span className="text-lg">¥ 1200円</span>
            </div>

            {/* リモート対応 */}
            <div className="flex items-center border-b pb-4">
              <GraduationCap className="w-6 h-6 text-main-col mr-4" />
              <span className="text-lg">リモート対応</span>
            </div>

            {/* タグ */}
            <div className="flex items-start">
              <Tag className="w-6 h-6 text-main-col mr-4 mt-1 shrink-0" />
              <div className="flex flex-wrap gap-2">
                {[
                  "バックエンド",
                  "フロントエンド",
                  "グローバル",
                  "筑波大生が在籍中",
                  "Ruby",
                  "React",
                  "プロジェクトマネージャー",
                  "TypeScript",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 選考フロー */}
        <section className="rounded-lg p-4 space-y-4">
          <h2 className="text-main-col text-xl font-bold mb-2">選考フロー</h2>
          <div className="relative">
            {/* 縦線 */}
            <div className="absolute left-[2.1rem] top-[3rem] bottom-4 w-0.5 bg-main-col" />
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative flex items-start">
                  {/* 丸枠 */}
                  <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 border-purple-600 bg-white">
                    <span className="text-xl font-bold text-purple-600">
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <span className="pt-5 text-xl font-bold">
                        {step.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 企業情報 */}
        <section className="rounded-lg p-4 space-y-4">
          <h2 className="text-main-col text-xl font-bold mb-2">企業情報</h2>
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-gray-300">
            <Image
              src=""
              alt="Techouse office space"
              fill
              className="object-cover"
            />
          </div>

          {/* 連絡先など */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-main-col flex-shrink-0" />
              <a
                href="https://jp.techouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                https://jp.techouse.com/
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-main-col flex-shrink-0" />
              <a
                href="mailto:techouse@sample.com"
                className="text-blue-600 hover:underline"
              >
                techouse@sample.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-main-col flex-shrink-0" />
              <span>123-456-7890</span>
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">事業の内容</h2>
          <p className="text-gray-700">
            ・約1か月間の研修を実施していただいた後、実務開発開始となります。
          </p>
        </section>

        {/* 社風・カルチャー */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">
            社風・カルチャー
          </h2>
          <p className="text-gray-700">
            ・約1か月間の研修を実施していただいた後、実務開発開始となります
          </p>
        </section>

        {/* 学生に一言 */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">学生に一言</h2>
          <p className="text-gray-700">
            約1か月間の研修を実施していただいた後、実務開発開始となります。プロダ
          </p>
        </section>

        {/* 仕事内容 */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">仕事内容</h2>
          <p className="text-gray-700">
            ・約1か月間の研修を実施していただいた後、実務開発開始となります。プロダクト開発に携わっていただくための研修プログラムをご用意しておりますので、開発未経験の方でもご安心ください。
          </p>
        </section>

        {/* 得られるスキル */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">
            得られるスキル
          </h2>
          <p className="text-gray-700">・フルスタックなWeb開発経験、PM経験</p>
        </section>

        {/* 勤務形態 */}
        <section className="rounded-lg p-4 space-y-2">
          <h2 className="text-main-col text-xl font-bold mb-2">勤務形態</h2>
          <p className="text-gray-700">フルリモート/一部リモート勤務</p>
          <p className="text-gray-700">
            勤務地：東京都港区三田3-13-12三田MTビル 5F
          </p>
        </section>

        {/* 応募必須条件 */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">
            応募必須条件
          </h2>
          <p className="text-gray-700">
            ・プログラミング経験・言語・スキルレベルは問いません。
            <br />
            授業で学んだ、独学で勉強したなどでもOK！
          </p>
        </section>

        {/* 歓迎条件 */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">
            こんな方に来てほしい（歓迎条件）
          </h2>
          <p className="text-gray-700">
            ・Ruby, JavaScript, React などを用いたWeb開発経験
          </p>
        </section>

        {/* その他情報 */}
        <section className="rounded-lg p-4">
          <h2 className="text-main-col text-xl font-bold mb-2">その他情報</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>交通費支給: 月3万円まで</li>
            <li>
              福利厚生:
              書籍購入自由・資格取得費用の会社負担・月1回の社内学習会で個人学習用途でAWSの自由利用可
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
