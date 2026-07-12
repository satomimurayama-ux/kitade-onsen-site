import Link from "next/link";

/**
 * 404ページ。存在しないURLにアクセスしたときに表示されます。
 */
export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-6xl" aria-hidden="true">
        ♨
      </p>
      <h1 className="mt-4 font-serif text-2xl font-bold text-indigo-deep">
        ページが見つかりませんでした
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-indigo-soft">
        お探しのページは移動または削除された可能性があります。
        <br />
        トップページから温泉レポートをお探しください。
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-indigo px-6 py-2.5 text-sm font-bold text-white hover:opacity-85"
        >
          トップページへ
        </Link>
        <Link
          href="/report"
          className="rounded-full border border-indigo px-6 py-2.5 text-sm font-bold text-indigo hover:bg-indigo hover:text-white"
        >
          温泉レポート一覧へ
        </Link>
      </div>
    </div>
  );
}
