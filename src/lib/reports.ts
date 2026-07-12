/**
 * 温泉レポート記事の読み込み処理。
 * content/reports/ フォルダにある .md ファイルを読み込み、
 * フロントマター（記事データ）と本文に分けて返します。
 *
 * 記事を追加するとき：content/reports/ に新しい .md ファイルを置くだけ。
 * ファイル名（拡張子を除く）がそのままURLのスラッグになります。
 * 例：miyajima-shioyu.md → /report/miyajima-shioyu/
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Report } from "./types";

const reportsDir = path.join(process.cwd(), "content", "reports");

/** すべてのレポートを新しい順（訪問日の降順）で取得 */
export function getAllReports(): Report[] {
  const files = fs
    .readdirSync(reportsDir)
    .filter((file) => file.endsWith(".md"));

  const reports = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return readReport(slug);
  });

  return reports.sort((a, b) => (a.visitedAt < b.visitedAt ? 1 : -1));
}

/** スラッグを指定して1件取得（存在しない場合は null） */
export function getReport(slug: string): Report | null {
  const filePath = path.join(reportsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return readReport(slug);
}

/** 都道府県スラッグで絞り込み */
export function getReportsByPrefecture(prefSlug: string): Report[] {
  return getAllReports().filter((r) => r.prefecture === prefSlug);
}

/** 特徴タグで絞り込み */
export function getReportsByFeature(featureSlug: string): Report[] {
  return getAllReports().filter((r) => r.features.includes(featureSlug));
}

/** 泉質タグで絞り込み */
export function getReportsByQuality(qualitySlug: string): Report[] {
  return getAllReports().filter((r) => r.qualities.includes(qualitySlug));
}

function readReport(slug: string): Report {
  const filePath = path.join(reportsDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    onsenName: data.onsenName ?? "",
    facilityName: data.facilityName ?? "",
    visitedAt: data.visitedAt ?? "",
    publishedAt: data.publishedAt ?? "",
    prefecture: data.prefecture ?? "",
    features: data.features ?? [],
    qualities: data.qualities ?? [],
    excerpt: data.excerpt ?? "",
    thumbnail: data.thumbnail ?? "/images/placeholder-noimage.svg",
    thumbnailAlt: data.thumbnailAlt ?? data.title ?? "温泉の写真",
    kyokoEye: data.kyokoEye ?? [],
    sensoryScore: data.sensoryScore,
    basicData: data.basicData ?? { address: "" },
    springData: data.springData ?? {},
    body: content.trim(),
  };
}
