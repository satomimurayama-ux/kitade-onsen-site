import Link from "next/link";
import { footerLinks, navItems, siteConfig, snsLinks } from "@/data/site";

/**
 * 共通フッター。
 * 主要ページへのリンク・サブリンク・SNSリンク・コピーライトを表示します。
 */
export default function Footer() {
  return (
    <footer className="mt-16 bg-indigo-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-serif text-lg font-bold">♨ {siteConfig.name}</p>
        <p className="mt-2 max-w-2xl text-sm text-steam">
          {siteConfig.description}
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <nav aria-label="フッターメニュー">
            <h2 className="mb-3 text-xs font-bold tracking-widest text-steam">
              MENU
            </h2>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-yu hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="サイト情報">
            <h2 className="mb-3 text-xs font-bold tracking-widest text-steam">
              INFO
            </h2>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yu hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="SNSリンク">
            <h2 className="mb-3 text-xs font-bold tracking-widest text-steam">
              FOLLOW
            </h2>
            <ul className="space-y-2 text-sm">
              {snsLinks.map((sns) => (
                <li key={sns.label}>
                  <a
                    href={sns.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yu hover:underline"
                  >
                    {sns.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-steam">
              ※リンク先は仮です。実際のアカウントURLに変更してください。
            </p>
          </nav>
        </div>

        <p className="mt-10 border-t border-indigo-soft pt-4 text-center text-xs text-steam">
          {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}
