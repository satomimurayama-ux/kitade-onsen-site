/**
 * 泉質タグマスタ。
 * slug がURLの一部になります（例：/quality/io-sen/）。
 * 記事のフロントマターの qualities には slug を書きます。
 */

export type Quality = {
  slug: string;
  name: string;
};

export const qualities: Quality[] = [
  { slug: "tanjun-onsen", name: "単純温泉" },
  { slug: "alkali-tanjun", name: "アルカリ性単純温泉" },
  { slug: "enkabutsu-sen", name: "塩化物泉" },
  { slug: "tansan-suiso-en-sen", name: "炭酸水素塩泉" },
  { slug: "ryusan-en-sen", name: "硫酸塩泉" },
  { slug: "nisanka-tanso-sen", name: "二酸化炭素泉" },
  { slug: "gantetsu-sen", name: "含鉄泉" },
  { slug: "sansei-sen", name: "酸性泉" },
  { slug: "ganyoso-sen", name: "含よう素泉" },
  { slug: "io-sen", name: "硫黄泉" },
  { slug: "tanjun-io-sen", name: "単純硫黄泉" },
  { slug: "hoshano-sen", name: "放射能泉" },
];

export function getQuality(slug: string): Quality | undefined {
  return qualities.find((q) => q.slug === slug);
}
