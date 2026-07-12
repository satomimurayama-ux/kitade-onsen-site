import Link from "next/link";
import { prefectures, regions } from "@/data/prefectures";

/**
 * 都道府県から探すセクション。地方ごとにグループ化して表示します。
 */
export default function PrefectureSearch() {
  return (
    <div className="space-y-4">
      {regions.map((region) => (
        <div key={region} className="flex flex-col gap-2 sm:flex-row">
          <h3 className="w-32 shrink-0 text-sm font-bold text-indigo-deep">
            {region}
          </h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {prefectures
              .filter((p) => p.region === region)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/prefecture/${p.slug}`}
                    className="text-indigo-soft hover:text-yu hover:underline"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
