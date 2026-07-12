import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { qualities, getQuality } from "@/data/qualities";
import { getReportsByQuality } from "@/lib/reports";
import Breadcrumb from "@/components/Breadcrumb";
import ReportCard from "@/components/ReportCard";

/**
 * 泉質タグ別のレポート一覧ページ。
 * URLは /quality/[泉質スラッグ]（例：/quality/io-sen）。
 */

type Props = { params: { tag: string } };

export function generateStaticParams() {
  return qualities.map((q) => ({ tag: q.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const quality = getQuality(params.tag);
  if (!quality) return {};
  return { title: `泉質「${quality.name}」の温泉レポート` };
}

export default function QualityPage({ params }: Props) {
  const quality = getQuality(params.tag);
  if (!quality) notFound();

  const reports = getReportsByQuality(quality.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "温泉レポート", href: "/report" },
          { label: `泉質：${quality.name}` },
        ]}
      />
      <h1 className="mt-4 font-serif text-3xl font-bold text-indigo-deep">
        「{quality.name}」の温泉レポート
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
          「{quality.name}」のレポートはまだありません。
        </p>
      )}
    </div>
  );
}
