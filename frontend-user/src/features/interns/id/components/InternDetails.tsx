import { InternFull } from "@/types/intern";
import Image from "next/image";

type InternDetailsProps = {
  intern: InternFull;
};

export default function InternDetails({ intern }: InternDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex items-start gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/default_profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-main-col">
            {intern.department}
          </h1>
          <h2 className="text-2xl font-bold mb-1 text-main-col">{intern.grade}</h2>
          <span className="text-2xl font-bold text-main-col">{intern.nickname}</span><span className="inline text-xl">さん</span>
        </div>
      </div>

      {/* 基本データや実績など */}
      <div className="space-y-4">
        <section className="bg-gray-200 rounded-lg p-4">
          <h3 className="mb-2 font-semibold">基本データ</h3>
          <dl className="space-y-2">
            <div>
              <dt className="text-bold inline">学類: </dt>
              <dd className="inline">
                {intern.department}
                {intern.grade}
              </dd>
            </div>
            <div>
              <dt className="inline">研究室: </dt>
              <dd className="inline">{intern.labo}</dd>
            </div>
            <div>
              <dt className="inline">サークル: </dt>
              <dd className="inline">{intern.club}</dd>
            </div>
          </dl>
        </section>

        <section className="bg-gray-200 rounded-lg p-4">
          <h3 className="mb-2 font-semibold">実績</h3>
          <ul className="list-disc list-inside">
            {/* {intern.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))} */}
          </ul>
        </section>

        <section className="bg-gray-200 rounded-lg p-4">
          <h3 className="mb-2 font-semibold">インターン応募時の経験</h3>
          <p>{intern.application_reason}</p>
        </section>
      </div>

      {/* インターン詳細 */}
      <div>
        <header className="flex items-center justify-between bg-main-col p-4 text-white rounded-t-lg">
          <h1 className="text-xl font-bold">
            {intern.nickname}さんのインターン体験記
          </h1>
        </header>
        {/* 更新日表示 */}
        <span className="text-sm block p-4 pt-2 pb-0">
          更新日: {intern.updated_at}
        </span>
        {/* コンテンツ本体 */}
        <div className="space-y-16 py-4 px-2 rounded-b-lg">
          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              インターン内容
            </h2>
            <div className="space-y-2">
              <h3 className="font-bold">株式会社{intern.company_name}</h3>
              <p className="">{intern.department}</p>
            </div>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">勤務期間</h2>
            <p className="">{intern.work_duration}</p>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">週勤務時間</h2>
            {/* {intern.weeklyHours.map((hours, index) => (
              <p key={index} className="">
                {hours}
              </p>
            ))} */}
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              {intern.nickname}さんの時給
            </h2>
            <div className="space-y-1">
              <p className="">{intern.hourly_wage}</p>
              <p className="">{intern.hourly_wage_description}</p>
            </div>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">勤務形態</h2>
            <p className="">{intern.work_style}</p>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              応募した理由
            </h2>
            <p className="">{intern.application_reason}</p>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              インターンを通して身についたスキル
            </h2>
            {/* <ul className="list-disc list-inside ">
              {intern.skillsGained.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul> */}
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              面接でアピールしたこと
            </h2>
            <p className="">{intern.evaluation_reason}</p>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              後輩へのアドバイス
            </h2>
            <p className=" whitespace-pre-line">{intern.advise}</p>
          </section>

          <section>
            <h2 className="text-main-col text-xl font-bold mb-2">
              会社のぷっちゃけ評価
            </h2>
            <p className="">{intern.evaluation}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
