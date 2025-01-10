import { Intern } from "@/types/intern";
import Image from "next/image";

type InternDetailsProps = {
  intern: Intern;
};

export default function InternDetails({ intern }: InternDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={`https://api.dicebear.com/6.x/adventurer/png?seed=${intern.nickname}`}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-main-col">
            {intern.department}
          </h1>
          <h2 className="text-2xl font-extrabold mb-1 text-main-col">
            {intern.grade}
          </h2>
          <span className="text-2xl font-extrabold text-main-col">
            {intern.nickname}
          </span>
          <span className="inline text-xl">さん</span>
        </div>
      </div>

      {/* 基本データや実績など */}
      <div className="space-y-4">
        <section className="bg-gray-100 rounded-lg p-4">
          <h3 className="mb-2 font-semibold">基本データ</h3>
          <dl className="space-y-2">
            <div>
              <dt className="font-extrabold inline">学類: </dt>
              <dd className="inline">
                {intern.department}
                {intern.grade}
              </dd>
            </div>
            <div>
              <dt className="font-extrabold inline">研究室: </dt>
              <dd className="inline">{intern.labo}</dd>
            </div>
            <div>
              <dt className="font-extrabold inline">サークル: </dt>
              <dd className="inline">{intern.club}</dd>
            </div>
          </dl>
        </section>

        <section className="bg-gray-100 rounded-lg p-4">
          <h3 className="mb-2 font-semibold">実績</h3>
          <ul className="list-disc list-inside leading-relaxed">
            {/* {intern.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))} */}
            {intern.achievements}
          </ul>
        </section>

        <section className="bg-gray-100 rounded-lg p-4 leading-relaxed">
          <h3 className="mb-2 font-semibold">インターン応募時の経験・経歴</h3>
          <p>{intern.experience}</p>
        </section>
      </div>

      {/* インターン詳細 */}
      <div>
        <section className="flex items-center justify-between bg-main-col p-4 text-white rounded-t-lg">
          <h1 className="text-xl font-extrabold">
            {intern.nickname}さんのインターン体験記
          </h1>
        </section>
        {/* 更新日表示 */}
        <span className="text-sm text-right py-2 block">
          更新日: {intern.updated_at}
        </span>
        {/* コンテンツ本体 */}
        <div className="space-y-16 p-4 bg-white shadow rounded-lg">
          <section>
            <h2 className="text-main-col font-extrabold mb-2">
              インターン内容
            </h2>
            <div className="space-y-2">
              <h3 className="font-extrabold">{intern.company_name}</h3>
              <p className="leading-relaxed">{intern.intern_detail}</p>
            </div>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2">
              会社のぶっちゃけ評価　
              <div className="text-gray-800 font-extrabold inline">
                {intern.evaluation}.0 / 5.0
              </div>
            </h2>
            <p className="leading-relaxed">{intern.evaluation_reason}</p>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2 leading-relaxed">
              勤務期間
            </h2>
            <p className="">{intern.work_duration_description}</p>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2 leading-relaxed">
              週勤務時間
            </h2>
            {intern.weekly_hours_description}
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2">
              {intern.nickname}さんの時給
            </h2>
            <div className="space-y-1">
              <p className="leading-relaxed"> 時給{intern.hourly_wage}円</p>
              <p className="leading-relaxed">
                {" "}
                {intern.hourly_wage_description}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2">勤務形態</h2>
            <p className="leading-relaxed">{intern.work_style}</p>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2">応募した理由</h2>
            <p className="leading-relaxed">{intern.application_reason}</p>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2">
              長期インターン内定をもらうためにやったこと
            </h2>
            <p className="leading-relaxed">{intern.evaluation_reason}</p>
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2 leading-relaxed">
              インターンを通して身についたスキル
            </h2>
            {/* <ul className="list-disc list-inside ">
              {intern.skillsGained.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul> */}
            {intern.acquired_skill}
          </section>

          <section>
            <h2 className="text-main-col font-extrabold mb-2">
              後輩へのアドバイス
            </h2>
            <p className="leading-relaxed whitespace-pre-line">
              {intern.advise}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
