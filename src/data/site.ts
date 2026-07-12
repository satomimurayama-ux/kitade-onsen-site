/**
 * サイト全体の設定。
 * サイト名・説明文・ナビゲーション・SNSリンクをここで一括管理します。
 * メニュー項目を増やすときはこのファイルだけ編集すればOKです。
 */

export const siteConfig = {
  name: "北出温泉",
  fullName: "温泉専門家サイト（仮）北出温泉",
  description:
    "温泉専門家が日本全国の温泉を自らの足で巡り、自信をもってお薦めできる温泉を紹介するサイトです。",
  copyright: "© 2026 Spring lab.Co., LLC. All rights reserved.",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "北出温泉について", href: "/about" },
  { label: "プロフィール", href: "/profile" },
  {
    label: "温泉レポート",
    href: "/report",
    children: [
      { label: "温泉レポート一覧", href: "/report" },
      { label: "都道府県で選ぶ", href: "/report#prefecture" },
      { label: "特徴から選ぶ", href: "/report#feature" },
      { label: "泉質から選ぶ", href: "/report#quality" },
    ],
  },
  { label: "温泉コラム", href: "/column" },
  {
    label: "メディア情報",
    href: "/media",
    children: [
      { label: "Web", href: "/media/web" },
      { label: "テレビ・ラジオ", href: "/media/tv" },
      { label: "雑誌", href: "/media/magazine" },
      { label: "講演", href: "/media/seminar" },
      { label: "イベント", href: "/media/event" },
      { label: "その他", href: "/media/others" },
    ],
  },
  { label: "トピックス", href: "/topics" },
  { label: "仕事のご依頼", href: "/contact" },
];

export type SnsLink = { label: string; href: string };

export const snsLinks: SnsLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

export const footerLinks = [
  { label: "運営会社", href: "/operation" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "サイトマップ", href: "/sitemap" },
  { label: "仕事のご依頼・お問い合わせ", href: "/contact" },
];
