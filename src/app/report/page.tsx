import type { Metadata } from "next";
import { getAllReports } from "@/lib/reports";
import Breadcrumb from "@/components/Breadcrumb";
import ReportFilter from "@/components/ReportFilter";
import PrefectureSearch from "@/components/PrefectureSearch";
import SectionTitle from "@/components/SectionTitle";
import TagBadge from "@/components/TagBadge";
import { features } from "@/data/features";
import { qualities } from "@/data/qualities";

/**
 * 温泉レポート一覧ページ。
 * 上部：セレクトボックスによる絞り込み付きの記事一覧
 * 下部：都道府県・特徴・泉質のリンク一覧（アンカー #prefecture などで直接移動可能）
 */
export const metadata: Metadata = {
  title: "温泉レポート一覧",
  description: "日本全国の温泉レポートを都道府県・特徴・泉質から探せます。",
};

export default function ReportListPage() {
  const reports = getAllReports();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb items={[{ label: "温泉レポート" }]} />

      <h1 className="mt-4 font-serif text-3xl font-bold text-indigo-deep">
        温泉レポート
      </h1>
      <p className="mt-2 text-sm text-indigo-soft">
        全{reports.length}件のレポートを掲載しています。条件を選んで絞り込めます。
      </p>

      <div className="mt-6">
        <ReportFilter reports={reports} />
      </div>

      <section id="prefecture" className="mt-16 scroll-mt-20">
        <SectionTitle eyebrow="Prefecture" title="都道府県で選ぶ" />
        <PrefectureSearch />
      </section>

      <section id="feature" className="mt-12 scroll-mt-20">
        <SectionTitle eyebrow="Feature" title="特徴から選ぶ" />
        <div className="flex flex-wrap gap-2">
          {features.map((f) => (
            <TagBadge key={f.slug} kind="feature" slug={f.slug} name={f.name} />
          ))}
        </div>
      </section>

      <section id="quality" className="mt-12 scroll-mt-20">
        <SectionTitle eyebrow="Spring Quality" title="泉質から選ぶ" />
        <div className="flex flex-wrap gap-2">
          {qualities.map((q) => (
            <TagBadge key={q.slug} kind="quality" slug={q.slug} name={q.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
