import Image from "next/image";

export default function LPHead() {
  return (
    <>
      <div className="w-full h-auto">
        <Image
          src="/LP.png"
          alt="image-sample"
          layout="responsive"
          width={940}
          height={788}
          className="w-full h-auto object-contain"
          placeholder="empty" // プレースホルダーを無効化
        />
      </div>
      <div className="w-full h-auto">
        <Image
          src="/LP2.png"
          alt="image-sample"
          layout="responsive"
          width={940}
          height={788}
          className="w-full h-auto object-contain"
          placeholder="empty" // プレースホルダーを無効化
        />
      </div>
    </>
  );
}
