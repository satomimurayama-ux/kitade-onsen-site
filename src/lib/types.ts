/**
 * サイト全体で使う型定義。
 * 温泉レポート1件分のデータ構造をここで決めています。
 * 記事は content/reports/*.md のフロントマター（--- で囲まれた部分）に
 * この形式で書きます。
 */

/** 温泉施設の基本データ（詳細ページの表に表示） */
export type BasicData = {
  address: string; // 住所
  tel?: string; // 電話番号
  website?: string; // 公式サイトURL
  hours?: string; // 営業時間
  holiday?: string; // 定休日
  fee?: string; // 料金
  bath?: string; // 風呂の種類
  parking?: string; // 駐車場
  usage?: string; // 利用形態（日帰り/宿泊）
};

/** 泉質データ（詳細ページの表に表示） */
export type SpringData = {
  quality?: string; // 泉質名（表示用の正式名称）
  temperature?: string; // 泉温
  flowRate?: string; // 湧出量
  ph?: string; // pH
  dissolved?: string; // 溶存物質総量
  appearance?: string; // 色・香り・味
  outflow?: string; // 湧出形態
  note?: string; // 備考
};

/** 温泉レポート1記事分 */
export type Report = {
  slug: string; // URLになる文字列（ファイル名から自動で決まる）
  title: string; // 記事タイトル
  onsenName: string; // 温泉地名（例：宮島潮湯温泉）
  facilityName: string; // 施設名（例：錦水館）
  visitedAt: string; // 訪問日 YYYY-MM-DD
  publishedAt: string; // 公開日 YYYY-MM-DD
  prefecture: string; // 都道府県スラッグ（例：hiroshima）
  features: string[]; // 特徴タグのスラッグ（例：["shukuhaku"]）
  qualities: string[]; // 泉質タグのスラッグ（例：["enkabutsu"]）
  excerpt: string; // 一覧に表示する要約文
  thumbnail: string; // サムネイル画像パス（/images/〜）
  thumbnailAlt: string; // サムネイル画像の説明（alt属性）
  kyokoEye: string[]; // 「Kyoko's eye!」おすすめポイント
  sensoryScore?: number; // 感覚データ（30点満点）
  basicData: BasicData;
  springData: SpringData;
  body: string; // 本文（Markdown）
};
