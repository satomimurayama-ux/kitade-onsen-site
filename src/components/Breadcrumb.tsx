import Link from "next/link";

/**
 * パンくずリスト。
 * 使い方：<Breadcrumb items={[{ label: "温泉レポート", href: "/report" }, { label: "記事名" }]} />
 * 先頭の「ホーム」は自動で付きます。href を省略した項目は現在地としてリンクなしで表示します。
 */
export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "ホーム", href: "/" }, ...items];
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-indigo-soft">
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-yu hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-indigo-deep">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
