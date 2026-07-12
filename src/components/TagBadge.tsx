import Link from "next/link";

/**
 * 特徴・泉質タグのバッジ。
 * kind によって色とリンク先が変わります。
 */
export default function TagBadge({
  kind,
  slug,
  name,
}: {
  kind: "feature" | "quality";
  slug: string;
  name: string;
}) {
  const styles =
    kind === "feature"
      ? "border-indigo-soft text-indigo bg-white hover:bg-indigo hover:text-white"
      : "border-yu text-yu bg-white hover:bg-yu hover:text-white";
  return (
    <Link
      href={`/${kind}/${slug}`}
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs transition-colors ${styles}`}
    >
      {name}
    </Link>
  );
}
