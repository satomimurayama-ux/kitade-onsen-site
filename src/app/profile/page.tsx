/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "@/lib/paths";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "プロフィール",
  description:
    "温泉専門家・北出恭子のプロフィール。企業コンサルティング・自治体支援・メディア出演など幅広い実績を紹介します。",
};

const career: { year: string; label: string }[] = [
  { year: "20XX年", label: "温泉ソムリエ取得（仮）" },
  { year: "20XX年", label: "温泉入浴指導員取得（仮）" },
  { year: "20XX年", label: "フリーランス温泉専門家として独立（仮）" },
  { year: "20XX年", label: "Spring lab.Co., LLC. 設立（仮）" },
];

const qualifications: string[] = [
  "温泉ソムリエ認定講師（仮）",
  "温泉入浴指導員（仮）",
  "温泉健康指導士（仮）",
  "温泉療法専門医連携資格（仮）",
];

const achievements: { count: string; unit: string; title: string; body: string }[] = [
  {
    count: "XX",
    unit: "社以上",
    title: "企業コンサルティング",
    body: "温泉施設の経営改善から商品開発・スタッフ研修まで。温泉ビジネスの課題を伴走支援しています。",
  },
  {
    count: "XX",
    unit: "自治体",
    title: "自治体支援",
    body: "温泉地の観光振興・PR戦略・地域ブランディングなど、行政との連携プロジェクトを多数手がけています。",
  },
  {
    count: "XX",
    unit: "件以上",
    title: "メディア出演",
    body: "テレビ・ラジオ・雑誌・Webメディアへの出演・寄稿・監修。温泉の魅力を正しく届けています。",
  },
];

const media: { category: string; items: string[] }[] = [
  {
    category: "テレビ・ラジオ",
    items: [
      "〇〇テレビ「△△」出演（仮）",
      "〇〇ラジオ「□□」コメンテーター（仮）",
    ],
  },
  {
    category: "雑誌・書籍",
    items: [
      "〇〇マガジン 特集記事 監修（仮）",
      "「△△温泉ガイド」著者（仮）",
    ],
  },
  {
    category: "Webメディア",
    items: [
      "〇〇ウェブ 温泉コラム連載（仮）",
      "△△ニュース インタビュー掲載（仮）",
    ],
  },
  {
    category: "講演・セミナー",
    items: [
      "〇〇温泉シンポジウム 基調講演（仮）",
      "△△観光サミット 登壇（仮）",
    ],
  },
];

export default function ProfilePage() {
  return (
    <div>
      {/* パンくず */}
      <div className="border-b border-steam bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <Breadcrumb items={[{ label: "プロフィール" }]} />
        </div>
      </div>

      {/* ヒーロー */}
      <section className="bg-indigo-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div className="text-white">
            <p className="text-sm tracking-[0.3em] text-steam">PROFILE</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-relaxed">
              北出 恭子
            </h1>
            <p className="text-sm tracking-wider text-steam">Kyoko Kitade</p>
            <p className="mt-1 text-sm font-bold text-yu">
              温泉専門家・温泉ソムリエ認定講師（仮）
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steam">
              日本全国の温泉を自らの足で巡り、泉質・成分を科学的に分析。
              企業コンサルティング・自治体支援・メディア出演を通じて、
              温泉の正しい知識と魅力を広く発信しています。
              （この文章は仮です。実際のプロフィールに差し替えてください）
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-yu px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
            >
              仕事のご依頼はこちら
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src={assetPath("/images/placeholder-noimage.svg")}
              alt="北出恭子のプロフィール写真（仮）"
              width={320}
              height={320}
              className="h-56 w-56 rounded-full border-4 border-steam object-cover md:h-72 md:w-72"
            />
          </div>
        </div>
      </section>

      {/* 経歴・資格 */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle eyebrow="Career" title="経歴・資格" />
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-5 font-serif text-lg font-bold text-indigo-deep">
              経歴
            </h3>
            <dl className="space-y-5">
              {career.map(({ year, label }) => (
                <div key={year + label} className="flex gap-4">
                  <dt className="w-20 shrink-0 pt-0.5 text-sm font-bold text-yu">
                    {year}
                  </dt>
                  <dd className="text-sm leading-relaxed text-gray-700">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-lg font-bold text-indigo-deep">
              資格・認定
            </h3>
            <ul className="space-y-3">
              {qualifications.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="mt-0.5 text-yu" aria-hidden="true">
                    ♨
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 活動実績 */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle eyebrow="Achievements" title="活動実績" />
          <div className="grid gap-6 sm:grid-cols-3">
            {achievements.map(({ count, unit, title, body }) => (
              <div
                key={title}
                className="rounded-lg border border-steam bg-white p-6"
              >
                <p className="font-serif text-4xl font-bold text-yu">
                  {count}
                  <span className="ml-1 text-lg">{unit}</span>
                </p>
                <h3 className="mt-2 font-serif text-lg font-bold text-indigo-deep">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メディア出演歴 */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle eyebrow="Media" title="主なメディア出演・掲載" />
        <div className="grid gap-6 sm:grid-cols-2">
          {media.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-lg border border-steam p-5"
            >
              <h3 className="mb-3 font-serif text-base font-bold text-indigo-deep">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 text-steam" aria-hidden="true">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-indigo-soft">
          出演・掲載実績の詳細は
          <Link
            href="/media"
            className="ml-1 font-bold text-yu underline hover:no-underline"
          >
            メディア情報ページ
          </Link>
          をご覧ください。
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <p className="text-sm tracking-[0.3em] text-steam">CONTACT</p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-white">
            仕事のご依頼・お問い合わせ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-steam">
            企業コンサルティング・自治体支援・メディア出演のご相談は
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-yu px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </div>
  );
}
