/**
 * セクション見出し。英語ラベル＋日本語タイトルの2段構成。
 */
export default function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-yu">
        {eyebrow}
      </p>
      <h2 className="mt-1 font-serif text-2xl font-bold text-indigo-deep">
        {title}
      </h2>
    </div>
  );
}
