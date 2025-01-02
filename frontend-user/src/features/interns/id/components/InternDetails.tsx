import { InternFull } from "@/types/intern";
import Image from "next/image";

type InternDetailsProps = {
  intern: InternFull;
};

export default function InternDetails({ intern }: InternDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-4">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={"/images/default_profile.jpg"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main-col">
              {intern.department}
            </h1>
            <h2 className="text-xl mb-1">{intern.grade}</h2>
            <p className="text-lg">{intern.nickname}さん</p>
          </div>
        </div>
        <div className="space-y-4">
          <section className="bg-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">基本データ</h3>
            <dl className="space-y-2">
              <div>
                <dt className="inline">学類: </dt>
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
            <h3 className="font-semibold mb-2">実績</h3>
            <ul className="list-disc list-inside">
              {/* {intern.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))} */}
            </ul>
          </section>

          <section className="bg-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">インターン応募時の経験</h3>
            <p>{intern.application_reason}</p>
          </section>
        </div>
      </div>
      <div className="p-4">
        <header className="bg-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h1 className="text-xl font-bold">
            {intern.nickname}さんのインターン体験記
          </h1>
        </header>
        <span className="text-sm">更新日: {intern.updated_at}</span>

        <div className="space-y-6 bg-white p-6 rounded-b-lg shadow">
          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              インターン内容
            </h2>
            <div className="space-y-2">
              <h3 className="font-bold">株式会社{intern.company_name}</h3>
              <p className="text-gray-700">{intern.department}</p>
            </div>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">勤務期間</h2>
            <p className="text-gray-700">{intern.work_duration}</p>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              週勤務時間
            </h2>
            {/* {intern.weeklyHours.map((hours, index) => (
              <p key={index} className="text-gray-700">
                {hours}
              </p>
            ))} */}
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              {intern.nickname}さんの時給
            </h2>
            <div className="space-y-1">
              <p className="text-gray-700">{intern.hourly_wage}</p>
              <p className="text-gray-700">{intern.hourly_wage_description}</p>
            </div>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">勤務形態</h2>
            <p className="text-gray-700">{intern.work_style}</p>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              応募した理由
            </h2>
            <p className="text-gray-700">{intern.application_reason}</p>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              インターンを通して身についたスキル
            </h2>
            {/* <ul className="list-disc list-inside text-gray-700">
              {intern.skillsGained.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul> */}
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              面接でアピールしたこと
            </h2>
            <p className="text-gray-700">{intern.evaluation_reason}</p>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              後輩へのアドバイス
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{intern.advise}</p>
          </section>

          <section>
            <h2 className="text-purple-600 text-lg font-bold mb-2">
              会社のぷっちゃけ評価
            </h2>
            <p className="text-gray-700">{intern.evaluation}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
