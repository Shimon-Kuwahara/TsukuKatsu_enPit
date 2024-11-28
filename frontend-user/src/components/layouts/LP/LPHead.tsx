// import Image from "next/image";
import { Laptop, Home, Lightbulb } from "lucide-react";
import { HeroBadge } from "@/components/layouts/hero-badge";
import { FeatureCircle } from "@/components/layouts/feature-circle";

export default function LPHead() {
  return (
    <div className="relative bg-gradient-to-b from-white to-main-col">
      {/* Background Image */}
      <div
        className="absolute inset-x-0 top-[60px] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/test1.jpg')" }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-x-0 top-[60px] bg-white opacity-60 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto pt-12">
        {/* Hero Section */}
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-8">
            <HeroBadge color="purple">自分に合わせて</HeroBadge>
            <HeroBadge color="mint">安心</HeroBadge>
          </div>

          <h1 className="text-4xl sm:text-3xl font-bold mb-6 leading-tight">
            完全<span className="text-main-col text-4xl">筑波大生特化</span>の
            <p>長期インターン求人！</p>
          </h1>

          <p className="text-gray-600 text-xl">
            挑戦したいことが見つかる
          </p>
        </div>

        {/* Features Section */}
        <div className="relative mt-20 bg-main-col bg-opacity-70 p-4">
          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex justify-center mb-8">
              <FeatureCircle
                icon={Laptop}
                title="筑波大特化"
                description="OB・OGが働いているから安心"
              />
            </div>
            <div className="flex justify-between">
              <FeatureCircle
                icon={Home}
                title="どんな場所でも"
                description="ライフスタイルに合わせて働ける"
                className="-mt-12"
              />
              <FeatureCircle
                icon={Lightbulb}
                title="成長できる環境"
                description={"ここでしかできない経験"}
                className="-mt-12"
              />
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            <FeatureCircle
              icon={Laptop}
              title="筑波大特化"
              description="OB・OGが働いているから安心"
            />
            <FeatureCircle
              icon={Home}
              title="どんな場所でも"
              description="ライフスタイルに合わせて働ける"
            />
            <FeatureCircle
              icon={Lightbulb}
              title="成長できる環境"
              description={"ここでしかできない経験"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
