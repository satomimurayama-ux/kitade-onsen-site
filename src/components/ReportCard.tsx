/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Report } from "@/lib/types";
import { getPrefecture } from "@/data/prefectures";
import { getFeature } from "@/data/features";
import { getQuality } from "@/data/qualities";
import { assetPath } from "@/lib/paths";
import TagBadge from "@/components/TagBadge";

/**
 * 温泉レポート一覧用のカード。
 * サムネイル・日付・都道府県・タイトル・要約・タグを表示します。
 * 画像は当面SVGの仮画像を使うため next/image ではなく img を使用しています。
 * 写真（jpg/png）に切り替えるときは next/image への変更を検討してください。
 */
export default function ReportCard({ report }: { report: Report }) {
  const pref = getPrefecture(report.prefecture);

  return (
    <article className="overflow-hidden rounded-lg border border-steam bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/report/${report.slug}`} className="block">
        <img
          src={assetPath(report.thumbnail)}
          alt={report.thumbnailAlt}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-soft">
          <time dateTime={report.visitedAt}>
            訪問日 {report.visitedAt.replaceAll("-", ".")}
          </time>
          {pref && (
            <Link
              href={`/prefecture/${pref.slug}`}
              className="rounded bg-paper px-2 py-0.5 text-indigo hover:text-yu"
            >
              {pref.name}
            </Link>
          )}
        </div>
        <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-indigo-deep">
          <Link href={`/report/${report.slug}`} className="hover:text-yu">
            {report.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {report.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {report.features.map((slug) => {
            const f = getFeature(slug);
            return f ? (
              <TagBadge key={slug} kind="feature" slug={slug} name={f.name} />
            ) : null;
          })}
          {report.qualities.map((slug) => {
            const q = getQuality(slug);
            return q ? (
              <TagBadge key={slug} kind="quality" slug={slug} name={q.name} />
            ) : null;
          })}
        </div>
      </div>
    </article>
  );
}
