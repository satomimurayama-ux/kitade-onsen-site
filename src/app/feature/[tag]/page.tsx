import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features, getFeature } from "@/data/features";
import { getReportsByFeature } from "@/lib/reports";
import Breadcrumb from "@/components/Breadcrumb";
import ReportCard from "@/components/ReportCard";

/**
 * 特徴タグ別のレポート一覧ページ。
 * URLは /feature/[特徴スラッグ]（例：/feature/rotenburo）。
 */

type Props = { params: { tag: string } };

export function generateStaticParams() {
  return features.map((f) => ({ tag: f.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const feature = getFeature(params.tag);
  if (!feature) return {};
  return { title: `特徴「${feature.name}」の温泉レポート` };
}

export default function FeaturePage({ params }: Props) {
  const feature = getFeature(params.tag);
  if (!feature) notFound();

  const reports = getReportsByFeature(feature.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "温泉レポート", href: "/report" },
          { label: `特徴：${feature.name}` },
        ]}
      />
      <h1 className="mt-4 font-serif text-3xl font-bold text-indigo-deep">
        「{feature.name}」の温泉レポート
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
          「{feature.name}」のレポートはまだありません。
        </p>
      )}
    </div>
  );
}
