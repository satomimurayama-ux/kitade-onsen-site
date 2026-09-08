/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getAllReports } from "@/lib/reports";
import { features } from "@/data/features";
import { qualities } from "@/data/qualities";
import { assetPath } from "@/lib/paths";
import ReportCard from "@/components/ReportCard";
import PrefectureSearch from "@/components/PrefectureSearch";
import SectionTitle from "@/components/SectionTitle";
import TagBadge from "@/components/TagBadge";

/**
 * トップページ。
 * 構成：メインビジュアル → 新着レポート → About → 温泉を探す（都道府県・特徴・泉質）
 */
export default function HomePage() {
  const latestReports = getAllReports().slice(0, 6);

  return (
    <div>
      {/* メインビジュアル */}
      <section className="bg-indigo-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div className="text-white">
            <p className="text-sm tracking-[0.3em] text-steam">
              ONSEN CONSULTANT
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-relaxed md:text-4xl">
              温泉の専門知識で、
              <br />
              企業・地域・社会を動かす。
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steam">
              企業へのコンサルティング、自治体の温泉地振興支援、テレビ・雑誌・Web へのメディア出演。
              温泉専門家として、幅広い形で社会に貢献しています。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-yu px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
              >
                仕事のご依頼はこちら
              </Link>
              <Link
                href="/report"
                className="inline-block rounded-full border border-steam px-6 py-3 text-sm font-bold text-steam transition-colors hover:bg-white/10"
              >
                温泉レポートを見る
              </Link>
            </div>
          </div>
          <img
            src={assetPath("/images/placeholder-hero-onsen.svg")}
            alt="仮画像：湯けむりの上がる温泉のイラスト"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* 新着レポート */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle eyebrow="Hot Spring Report" title="新着の温泉レポート" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestReports.map((report) => (
            <ReportCard key={report.slug} report={report} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/report"
            className="inline-block rounded-full border border-indigo px-6 py-2.5 text-sm font-bold text-indigo transition-colors hover:bg-indigo hover:text-white"
          >
            レポート一覧を見る
          </Link>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle eyebrow="Services" title="専門家としての支援内容" />
          <div className="grid gap-6 sm:grid-cols-3">
            {/* 企業コンサルティング */}
            <div className="rounded-lg border border-steam bg-white p-6">
              <p className="text-2xl">🏢</p>
              <h3 className="mt-3 font-serif text-lg font-bold text-indigo-deep">
                企業コンサルティング
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                温泉施設の経営改善・商品開発・スタッフ研修など、
                温泉を軸にしたビジネス課題を専門知識で解決します。
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-bold text-yu underline hover:no-underline"
              >
                相談・依頼はこちら
              </Link>
            </div>

            {/* 自治体支援 */}
            <div className="rounded-lg border border-steam bg-white p-6">
              <p className="text-2xl">🗾</p>
              <h3 className="mt-3 font-serif text-lg font-bold text-indigo-deep">
                自治体支援
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                温泉地の観光振興・地域ブランディング・PR 戦略の立案など、
                自治体と連携して地域の温泉資源を活かす支援を行います。
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-bold text-yu underline hover:no-underline"
              >
                相談・依頼はこちら
              </Link>
            </div>

            {/* メディア出演 */}
            <div className="rounded-lg border border-steam bg-white p-6">
              <p className="text-2xl">📺</p>
              <h3 className="mt-3 font-serif text-lg font-bold text-indigo-deep">
                メディア出演
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                テレビ・ラジオ・雑誌・Web メディアへの出演・寄稿・監修。
                温泉の正しい知識をわかりやすく伝えます。
              </p>
              <Link
                href="/media"
                className="mt-4 inline-block text-sm font-bold text-yu underline hover:no-underline"
              >
                出演実績を見る
              </Link>
            </div>
          </div>

          <div className="mt-6 text-right">
            <Link
              href="/about"
              className="inline-block text-sm font-bold text-indigo underline hover:no-underline"
            >
              北出温泉について詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* 温泉を探す */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle eyebrow="Spa Resort Search" title="紹介した温泉を探す" />

        <div className="rounded-lg border border-steam p-5">
          <h3 className="mb-4 font-serif text-lg font-bold text-indigo-deep">
            都道府県から選ぶ
          </h3>
          <PrefectureSearch />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-steam p-5">
            <h3 className="mb-4 font-serif text-lg font-bold text-indigo-deep">
              特徴から選ぶ
            </h3>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <TagBadge
                  key={f.slug}
                  kind="feature"
                  slug={f.slug}
                  name={f.name}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-steam p-5">
            <h3 className="mb-4 font-serif text-lg font-bold text-indigo-deep">
              泉質から選ぶ
            </h3>
            <div className="flex flex-wrap gap-2">
              {qualities.map((q) => (
                <TagBadge
                  key={q.slug}
                  kind="quality"
                  slug={q.slug}
                  name={q.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
