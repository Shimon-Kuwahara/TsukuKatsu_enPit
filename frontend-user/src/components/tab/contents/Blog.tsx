import Link from 'next/link';

export default function Blog() {
  return (
    <div className="text-center mt-4">
      <Link href="/blog" className="btn btn-primary btn-lg">
        桑原しもんさんのブログを見る
      </Link>
    </div>
  );
}
