import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prefectures, getPrefecture } from "@/data/prefectures";
import { getReportsByPrefecture } from "@/lib/reports";
import Breadcrumb from "@/components/Breadcrumb";
import ReportCard from "@/components/ReportCard";

/**
 * 都道府県別のレポート一覧ページ。
 * URLは /prefecture/[都道府県スラッグ]（例：/prefecture/hokkaido）。
 * 47都道府県すべてのページをビルド時に生成します。
 */

type Props = { params: { pref: string } };

export function generateStaticParams() {
  return prefectures.map((p) => ({ pref: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const pref = getPrefecture(params.pref);
  if (!pref) return {};
  return { title: `${pref.name}の温泉レポート` };
}

export default function PrefecturePage({ params }: Props) {
  const pref = getPrefecture(params.pref);
  if (!pref) notFound();

  const reports = getReportsByPrefecture(pref.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[{ label: "温泉レポート", href: "/report" }, { label: pref.name }]}
      />
      <h1 className="mt-4 font-serif text-3xl font-bold text-indigo-deep">
        {pref.name}の温泉レポート
      </h1>
      <p className="mt-2 text-sm text-indigo-soft">{reports.length}件</p>

      {reports.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-indigo-soft">
          {pref.name}のレポートはまだありません。
        </p>
      )}
    </div>
  );
}
