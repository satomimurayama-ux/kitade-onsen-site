/**
 * 特徴タグマスタ。
 * slug がURLの一部になります（例：/feature/rotenburo/）。
 * 記事のフロントマターの features には slug を書きます。
 */

export type Feature = {
  slug: string;
  name: string;
};

export const features: Feature[] = [
  { slug: "shukuhaku", name: "宿泊" },
  { slug: "higaeri", name: "日帰り" },
  { slug: "zekkei", name: "絶景" },
  { slug: "shizen-yushutsu", name: "自然湧出" },
  { slug: "jifun", name: "自噴" },
  { slug: "gensen-100", name: "源泉100％" },
  { slug: "jika-gensen", name: "自家源泉" },
  { slug: "nigoriyu", name: "濁り湯" },
  { slug: "noko", name: "濃厚" },
  { slug: "atsuyu", name: "あつ湯" },
  { slug: "nuruyu", name: "ぬる湯" },
  { slug: "insen", name: "飲泉" },
  { slug: "rotenburo", name: "露天風呂" },
  { slug: "barrier-free", name: "バリアフリー" },
  { slug: "kashikiri", name: "貸切温泉" },
];

export function getFeature(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
