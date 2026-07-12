/**
 * データ表（温泉基本データ・泉質データ共通）。
 * rows に [ラベル, 値] の配列を渡します。値が空の行は表示しません。
 */
export default function SpecTable({
  caption,
  rows,
}: {
  caption: string;
  rows: [string, string | undefined][];
}) {
  const visible = rows.filter(([, value]) => value);
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="mb-2 text-left font-serif text-lg font-bold text-indigo-deep">
        {caption}
      </caption>
      <tbody>
        {visible.map(([label, value]) => (
          <tr key={label} className="border-b border-steam">
            <th
              scope="row"
              className="w-32 bg-paper px-3 py-2 text-left font-medium text-indigo-deep"
            >
              {label}
            </th>
            <td className="px-3 py-2 text-gray-700">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
