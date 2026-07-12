# 北出温泉サイト（再構築版・開発中）

温泉レポートサイトを Next.js で新しく作り直すプロジェクトです。
既存の公開サイトを参考にしつつ、コード・文章・画像はすべて新規に作成しています。
現在はサンプル記事3件と仮画像で骨格を確認できる状態です。

## 技術構成

- [Next.js 14](https://nextjs.org/)（App Router）
- TypeScript
- Tailwind CSS
- 記事管理：Markdownファイル（`content/reports/`）

## 起動方法（Mac）

Node.js 18以上が必要です（[nodejs.org](https://nodejs.org/) からインストール）。

```bash
# 1. 依存パッケージをインストール
npm install

# 2. 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開くとサイトが表示されます。
ファイルを保存すると自動で画面が更新されます。

### その他のコマンド

```bash
npm run lint    # コードチェック
npm run build   # 本番用ビルド
npm run start   # ビルド後の本番サーバー起動
```

## フォルダ構成

```
kitade-onsen-site/
├── content/reports/      # 温泉レポート記事（Markdown）★記事はここに追加
├── public/images/        # 画像（現在はすべて placeholder-*.svg の仮画像）
├── src/
│   ├── app/              # ページ
│   │   ├── page.tsx                  # トップページ
│   │   ├── report/page.tsx           # レポート一覧（絞り込み付き）
│   │   ├── report/[slug]/page.tsx    # レポート詳細
│   │   ├── prefecture/[pref]/        # 都道府県別一覧
│   │   ├── feature/[tag]/            # 特徴別一覧
│   │   ├── quality/[tag]/            # 泉質別一覧
│   │   └── not-found.tsx             # 404ページ
│   ├── components/       # ヘッダー・フッター・カードなどの部品
│   ├── data/             # 都道府県・特徴・泉質・サイト設定のマスタ
│   └── lib/              # 型定義と記事読み込み処理
├── CLAUDE.md             # AIコーディングツール向けの編集ガイド
└── README.md             # このファイル
```

## 記事の追加方法

1. `content/reports/` に `.md` ファイルを作成（ファイル名がURLになります）
2. 先頭のフロントマターに記事データを書く（サンプル記事を参考に）
3. 本文は空行区切りの段落で書く

詳しい手順は `CLAUDE.md` を参照してください。

## 注意

- SNSリンク・サイト紹介文・記事本文は現在すべて**仮の内容**です
- APIキーなどの秘密情報が必要になった場合は `.env.local` に書いてください（Git管理外）
