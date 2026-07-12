"use client";

import { useMemo, useState } from "react";
import type { Report } from "@/lib/types";
import { prefectures } from "@/data/prefectures";
import { features } from "@/data/features";
import { qualities } from "@/data/qualities";
import ReportCard from "@/components/ReportCard";

/**
 * 絞り込み機能の基本形。
 * 都道府県・特徴・泉質の3つのセレクトボックスで、
 * ページ移動なしに記事一覧を絞り込みます（複数条件はAND検索）。
 *
 * サーバー側で全記事を取得し、このコンポーネントに渡して
 * ブラウザ側でフィルタします。記事数が数百件程度までなら
 * この方式で十分高速です。
 */
export default function ReportFilter({ reports }: { reports: Report[] }) {
  const [pref, setPref] = useState("");
  const [feature, setFeature] = useState("");
  const [quality, setQuality] = useState("");

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      if (pref && r.prefecture !== pref) return false;
      if (feature && !r.features.includes(feature)) return false;
      if (quality && !r.qualities.includes(quality)) return false;
      return true;
    });
  }, [reports, pref, feature, quality]);

  const selectClass =
    "w-full rounded border border-steam bg-white px-3 py-2 text-sm text-indigo-deep focus:border-indigo focus:outline-none";

  return (
    <div>
      <div className="rounded-lg border border-steam bg-paper p-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-indigo-deep">
              都道府県
            </span>
            <select
              value={pref}
              onChange={(e) => setPref(e.target.value)}
              className={selectClass}
            >
              <option value="">すべて</option>
              {prefectures.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-indigo-deep">
              特徴
            </span>
            <select
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              className={selectClass}
            >
              <option value="">すべて</option>
              {features.map((f) => (
                <option key={f.slug} value={f.slug}>
                  {f.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-indigo-deep">
              泉質
            </span>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className={selectClass}
            >
              <option value="">すべて</option>
              {qualities.map((q) => (
                <option key={q.slug} value={q.slug}>
                  {q.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-indigo-soft">{filtered.length}件見つかりました</p>
          {(pref || feature || quality) && (
            <button
              type="button"
              onClick={() => {
                setPref("");
                setFeature("");
                setQuality("");
              }}
              className="text-sm text-yu underline hover:no-underline"
            >
              条件をクリア
            </button>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-sm text-indigo-soft">
          この条件に合う温泉レポートはまだありません。条件を変えてお試しください。
        </p>
      )}
    </div>
  );
}
