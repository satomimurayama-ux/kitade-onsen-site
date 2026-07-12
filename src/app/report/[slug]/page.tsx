/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllReports, getReport } from "@/lib/reports";
import { getPrefecture } from "@/data/prefectures";
import { getFeature } from "@/data/features";
import { getQuality } from "@/data/qualities";
import Breadcrumb from "@/components/Breadcrumb";
import SpecTable from "@/components/SpecTable";
import TagBadge from "@/components/TagBadge";

/**
 * 温泉レポート詳細ページ。
 * 構成：パンくず → タイトル・日付・タグ → Kyoko's eye → 本文
 *      → 温泉基本データ表 → 泉質データ表 → 感覚データ
 * URLは /report/[ファイル名] です。
 */

type Props = { params: { slug: string } };

// ビルド時に全記事分のページを静的生成する
export function generateStaticParams() {
  return getAllReports().map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const report = getReport(params.slug);
  if (!report) return {};
  return { title: report.title, description: report.excerpt };
}

export default function ReportDetailPage({ params }: Props) {
  const report = getReport(params.slug);
  if (!report) notFound();

  const pref = getPrefecture(report.prefecture);
  // 本文は空行区切りの段落として表示（Markdown完全対応は今後の課題）
  const paragraphs = report.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "温泉レポート", href: "/report" },
          ...(pref
            ? [{ label: pref.name, href: `/prefecture/${pref.slug}` }]
            : []),
          { label: report.title },
        ]}
      />

      {/* タイトルまわり */}
      <header className="mt-6">
        <p className="text-sm font-bold text-yu">{report.onsenName}</p>
        <h1 className="mt-1 font-serif text-3xl font-bold leading-relaxed text-indigo-deep">
          {report.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-indigo-soft">
          <time dateTime={report.visitedAt}>
            訪問日 {report.visitedAt.replaceAll("-", ".")}
          </time>
          <time dateTime={report.publishedAt}>
            公開日 {report.publishedAt.replaceAll("-", ".")}
          </time>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
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
      </header>

      <img
        src={report.thumbnail}
        alt={report.thumbnailAlt}
        width={800}
        height={600}
        className="mt-6 w-full rounded-lg"
      />

      {/* Kyoko's eye!（おすすめポイント） */}
      {report.kyokoEye.length > 0 && (
        <section className="mt-8 rounded-lg border-l-4 border-yu bg-paper p-5">
          <h2 className="font-serif text-lg font-bold text-yu">
            Kyoko&apos;s eye!
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {report.kyokoEye.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true" className="text-yu">
                  ♨
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 本文 */}
      <div className="mt-8 space-y-5 text-[15px] leading-loose text-gray-800">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* データ表 */}
      <section className="mt-12 space-y-10">
        <SpecTable
          caption="温泉基本データ"
          rows={[
            ["住所", report.basicData.address],
            ["電話", report.basicData.tel],
            ["Web", report.basicData.website],
            ["営業時間", report.basicData.hours],
            ["定休日", report.basicData.holiday],
            ["料金", report.basicData.fee],
            ["風呂", report.basicData.bath],
            ["駐車場", report.basicData.parking],
            ["利用形態", report.basicData.usage],
          ]}
        />

        <SpecTable
          caption="泉質データ"
          rows={[
            ["泉質", report.springData.quality],
            ["泉温", report.springData.temperature],
            ["湧出量", report.springData.flowRate],
            ["pH", report.springData.ph],
            ["溶存物質総量", report.springData.dissolved],
            ["色・香り・味", report.springData.appearance],
            ["湧出形態", report.springData.outflow],
            ["備考", report.springData.note],
          ]}
        />

        {typeof report.sensoryScore === "number" && (
          <div className="rounded-lg border border-steam p-5">
            <h2 className="font-serif text-lg font-bold text-indigo-deep">
              温泉の感覚データ
            </h2>
            <p className="mt-2 text-3xl font-bold text-yu">
              {report.sensoryScore}
              <span className="ml-1 text-base font-normal text-indigo-soft">
                / 30点
              </span>
            </p>
            <p className="mt-2 text-xs text-indigo-soft">
              ※今後、項目別のチャート表示に拡張予定です。
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
