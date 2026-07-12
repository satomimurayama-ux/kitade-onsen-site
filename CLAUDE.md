# CLAUDE.md — AIコーディングツール向けガイド

このファイルは Claude Code・Codex・Cursor などのAIツールがこのプロジェクトを
正しく理解して編集するためのガイドです。

## プロジェクト概要

温泉レポートサイトの再構築プロジェクト。既存の公開サイト（WordPress製）を参考に、
Next.js で新規に作り直している。**元サイトの文章・画像はコピーせず、
コンテンツは1件ずつ手動で移行する方針**。現在はサンプル記事3件のみ。

## 技術構成

- Next.js 14（App Router）/ TypeScript / Tailwind CSS
- 記事データ：`content/reports/*.md`（フロントマター＋本文のMarkdown）
- パッケージ管理：npm
- 全ページ静的生成（SSG）。データベース・APIサーバーなし

## コマンド

```bash
npm run dev     # 開発サーバー起動（http://localhost:3000）
npm run lint    # ESLintチェック（変更後は必ず成功させること）
npm run build   # 本番ビルド（変更後は必ず成功させること）
```

## ディレクトリの役割

| パス | 役割 |
|---|---|
| `src/app/` | ページ（App Router）。フォルダ＝URL |
| `src/components/` | 再利用コンポーネント。1ファイル1コンポーネント |
| `src/data/` | マスタデータ（都道府県・特徴・泉質・サイト設定・ナビ） |
| `src/lib/` | 型定義（types.ts）と記事読み込み処理（reports.ts） |
| `content/reports/` | 温泉レポート記事（Markdown）。ファイル名＝URLスラッグ |
| `public/images/` | 画像。仮画像は `placeholder-` で始まるファイル名 |

## よくある編集タスクの手順

### 記事を追加する
1. `content/reports/新しいスラッグ.md` を作成
2. フロントマターは既存のサンプル記事をコピーして書き換える
   （項目の意味は `src/lib/types.ts` のコメント参照）
3. `prefecture` / `features` / `qualities` には各マスタファイルの **slug** を書く
4. 画像を `public/images/` に置き、`thumbnail` と `thumbnailAlt` を設定
5. ページの追加作業は不要（自動でURLが生えます）

### メニュー項目を変更する
- `src/data/site.ts` の `navItems` を編集（ヘッダー・スマホメニュー・フッターに反映）

### タグを追加する
- 特徴：`src/data/features.ts`、泉質：`src/data/qualities.ts` に1行追加
- タグページは自動生成される

## 守るべきルール

- **APIキー・パスワードをコードに書かない**（必要になったら `.env.local` を使う。gitignore済み）
- 画像には必ず `alt` を設定する（日本語で内容を説明）
- 仮のテキスト・画像には「仮」「サンプル」「placeholder」と明示する
- 元サイトの文章・画像を大量にコピーしない
- 色は `tailwind.config.ts` のトークン（indigo / paper / yu / steam）を使う
- コミット前に `npm run lint` と `npm run build` を通す

## 既知の未実装（今後の作業候補）

- 本文のMarkdown完全対応（現在は空行区切りの段落のみ。remark等の導入を検討）
- 一覧のページネーション（記事が増えたら `/report` に追加）
- 固定ページ（/about, /profile, /contact など。ナビにリンクだけ存在し404になる）
- トピックス・メディア情報のセクション
- 感覚データのチャート表示
- お問い合わせフォームの送信機能
