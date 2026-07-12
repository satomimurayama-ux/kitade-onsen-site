/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getAllReports } from "@/lib/reports";
import { features } from "@/data/features";
import { qualities } from "@/data/qualities";
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
              ONSEN REPORT SITE
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-relaxed md:text-4xl">
              日本全国の温泉を、
              <br />
              自らの足で巡って紹介。
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steam">
              泉質・特徴・都道府県から、あなたにぴったりの温泉を探せます。
              （この文章は仮です。サイトの紹介文に差し替えてください）
            </p>
            <Link
              href="/report"
              className="mt-6 inline-block rounded-full bg-yu px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
            >
              温泉レポートを見る
            </Link>
          </div>
          <img
            src="/images/placeholder-hero-onsen.svg"
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

      {/* About */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle eyebrow="About" title="このサイトについて" />
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
            このサイトは、温泉専門家が日本全国の温泉を自らの足で巡り、
            五感で泉質を分析して紹介する温泉レポートサイトです。
            （この文章は仮です。実際のサイト紹介文に差し替えてください）
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-bold text-yu underline hover:no-underline"
          >
            詳しく見る
          </Link>
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
