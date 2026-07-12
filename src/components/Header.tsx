import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import MobileMenu from "@/components/MobileMenu";

/**
 * 共通ヘッダー。
 * PCではドロップダウン付きの横並びナビ、
 * スマホではハンバーガーメニュー（MobileMenu）を表示します。
 * メニュー項目の追加・変更は src/data/site.ts の navItems を編集してください。
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-steam bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-bold tracking-wide text-indigo-deep">
            ♨ {siteConfig.name}
          </span>
          <span className="hidden text-xs text-indigo-soft sm:inline">
            温泉専門家サイト（仮）
          </span>
        </Link>

        {/* PC用ナビゲーション */}
        <nav aria-label="メインメニュー" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2 text-indigo-deep transition-colors hover:bg-paper hover:text-yu"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-50 w-52 rounded-b border border-steam bg-white py-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-indigo-deep hover:bg-paper hover:text-yu"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* スマホ用メニュー（クライアントコンポーネント） */}
        <MobileMenu />
      </div>
    </header>
  );
}
