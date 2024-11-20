'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export default function HomeView() {
  const jobListingsRef = useRef<HTMLDivElement>(null);

  const scrollToJobListings = () => {
    jobListingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-gray-100">
        {/* Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 text-[100px] font-bold leading-tight pointer-events-none select-none opacity-40">
          <span className="bg-gradient-to-r from-[#7C3AED] to-white text-transparent bg-clip-text">IMAGINE</span>
          <span className="bg-gradient-to-r from-[#7C3AED] to-white text-transparent bg-clip-text">THE</span>
          <span className="bg-gradient-to-r from-[#7C3AED] to-white text-transparent bg-clip-text">FUTURE</span>
        </div>
        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold tracking-tight text-black text-left">
              <span className="block mb-6">インターン</span>
              挑戦してみない？
            </h1>
            <div className="flex justify-center">
              <Button className="border border-[#6D28D9] hover:bg-[#6D28D9] hover:text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg"
                      onClick={scrollToJobListings}
              >
                求人を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-10 text-center bg-white">
        <h2 className="text-xl font-medium mb-4">つくかつとは</h2>
        <p className="text-4xl font-bold leading-snug mb-10">
          <span className="text-[#7C3AED]">筑波大生に特化</span>した
          <br />
          インターン求人サイト
        </p>
      </section>

      {/* Concerns Section */}
      <section className="px-4 py-10 bg-[#F0F7FF]">
        <h2 className="text-center text-2xl font-medium mb-10">
          こんな
          <span className="relative mx-1">
            &quot;悩み&quot;
            <span className="absolute -bottom-1 left-0 w-full border-b-2 border-gray-800"></span>
          </span>
          ありませんか？
        </h2>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="max-w-[80%] ml-4">
            <div className="bg-white rounded-tl-[32px] rounded-br-[32px] p-6 shadow-md">
              <div className="text-lg leading-relaxed">
                インターンやってみたい
                <br />
                けど<span className="text-[#7CC1D8]">技術力が不安</span>...
              </div>
            </div>
          </div>

          <div className="max-w-[80%] ml-auto mr-4">
            <div className="bg-white rounded-tl-[32px] rounded-br-[32px] p-6 shadow-md">
              <div className="text-lg leading-relaxed">
                部活やサークルで忙しくて
                <br />
                <span className="text-[#7CC1D8]">時間が合うか</span>わからない...
              </div>
            </div>
          </div>

          <div className="max-w-[80%] ml-4">
            <div className="bg-white rounded-tl-[32px] rounded-br-[32px] p-6 shadow-md">
              <div className="text-lg leading-relaxed">
                なかなか
                <br />
                <span className="text-[#7CC1D8]">一歩踏み出せない</span>...
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 bg-white">
        <div className="bg-white w-full my-2">
          <div className="flex justify-center">
            <h2 className="text-center text-3xl font-medium relative inline-block">
              つくかつなら
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-[#7CC1D8]"></span>
            </h2>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-10 bg-gray-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="border-none shadow-md rounded-[15px]">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold mb-3">
                <span className="text-[#7C3AED] mr-2">01</span>/ 安心
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                筑波大生が欲しいと考えている企業のみ掲載されているので、一般的なインターンサイトよりも安心して応募できます。
                また、筑波大生の採用履歴のある企業が多いため申し込むハードルは低く応募しやすい企業が多く集まっています。
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md rounded-[15px]">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold mb-3">
                <span className="text-[#7C3AED] mr-2">02</span>/ 口コミが充実
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                実際にインターンに参加している筑波大生を中心とした大学生の口コミやインタビュー記事を豊富に掲載。
                インターンの内容や雰囲気、また求められるスキルや実際に勤務状況などを詳細に把握できた上で応募することができます。
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md rounded-[15px]">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold mb-3">
                <span className="text-[#7C3AED] mr-2">03</span>/ 隠れたインターン先
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                筑波近郊のインターン先など、大手のインターン求人サイトには載っていないような企業のインターンを探すことができます。
                穴場的インターンに興味はありませんか？
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="px-4 py-10 bg-white text-center"
                ref={jobListingsRef}
      >
        <h2 className="text-2xl font-bold mb-4 relative inline-block">
          掲載している求人の例
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-[#7CC1D8]"></span>
        </h2>
      </section>
    </div>
  );
}