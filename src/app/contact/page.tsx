import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "企業コンサルティング・自治体支援・メディア出演など、仕事のご依頼・お問い合わせはこちらから。",
};

const inquiryTypes = [
  "企業コンサルティング",
  "自治体支援",
  "メディア出演・取材依頼",
  "講演・セミナー依頼",
  "その他",
];

const inputClass =
  "w-full rounded border border-steam px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo";

const labelClass = "mb-1.5 block text-sm font-bold text-indigo-deep";

export default function ContactPage() {
  return (
    <div>
      {/* パンくず */}
      <div className="border-b border-steam bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <Breadcrumb items={[{ label: "お問い合わせ" }]} />
        </div>
      </div>

      {/* ページヘッダー */}
      <section className="bg-indigo-deep">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="text-sm tracking-[0.3em] text-steam">CONTACT</p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-relaxed text-white md:text-4xl">
            仕事のご依頼・
            <br className="sm:hidden" />
            お問い合わせ
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-steam">
            企業コンサルティング・自治体支援・メディア出演など、
            お気軽にご相談ください。内容を確認のうえ、
            3営業日以内にご返信いたします。
          </p>
        </div>
      </section>

      {/* フォーム */}
      <section className="mx-auto max-w-2xl px-4 py-12">
        {/* 送信準備中のお知らせ */}
        <div className="mb-8 rounded-lg border border-steam bg-paper px-5 py-4">
          <p className="text-sm leading-relaxed text-indigo-soft">
            ※ 現在、フォームの送信機能は準備中です。
            <br />
            お急ぎの方はメールにてご連絡ください。
          </p>
        </div>

        <form>
          <div className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className={labelClass}>
                お名前{" "}
                <span className="text-yu" aria-label="必須">
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="山田 太郎"
                className={inputClass}
              />
            </div>

            {/* 会社名 */}
            <div>
              <label htmlFor="company" className={labelClass}>
                会社名・組織名
                <span className="ml-2 text-xs font-normal text-indigo-soft">
                  任意
                </span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="〇〇株式会社"
                className={inputClass}
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className={labelClass}>
                メールアドレス{" "}
                <span className="text-yu" aria-label="必須">
                  *
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="example@example.com"
                className={inputClass}
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="tel" className={labelClass}>
                電話番号
                <span className="ml-2 text-xs font-normal text-indigo-soft">
                  任意
                </span>
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                autoComplete="tel"
                placeholder="000-0000-0000"
                className={inputClass}
              />
            </div>

            {/* お問い合わせ区分 */}
            <div>
              <label htmlFor="type" className={labelClass}>
                お問い合わせ区分{" "}
                <span className="text-yu" aria-label="必須">
                  *
                </span>
              </label>
              <select
                id="type"
                name="type"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  選択してください
                </option>
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className={labelClass}>
                お問い合わせ内容{" "}
                <span className="text-yu" aria-label="必須">
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="お問い合わせ内容をご記入ください。"
                className={inputClass}
              />
            </div>
          </div>

          {/* 必須項目の説明 */}
          <p className="mt-4 text-xs text-indigo-soft">
            <span className="text-yu">*</span>{" "}
            は必須項目です。
          </p>

          {/* 送信ボタン */}
          <div className="mt-8">
            <button
              type="submit"
              disabled
              className="w-full cursor-not-allowed rounded-full bg-indigo-soft py-3 text-sm font-bold text-white opacity-60 sm:w-auto sm:min-w-48"
              aria-disabled="true"
            >
              送信する（準備中）
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
