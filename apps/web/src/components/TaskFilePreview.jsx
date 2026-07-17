const LINES = [
  { n: 1, text: "---", tone: "dim" },
  { n: 2, text: "id: 003", tone: "key" },
  { n: 3, text: "status: in_progress", tone: "status" },
  { n: 4, text: "created: 2026-07-17", tone: "key" },
  { n: 5, text: "tags: [auth, backend]", tone: "key" },
  { n: 6, text: "---", tone: "dim" },
  { n: 7, text: "", tone: "plain" },
  { n: 8, text: "# Fix session timeout on refresh", tone: "heading" },
  { n: 9, text: "", tone: "plain" },
  { n: 10, text: "Token isn't renewed when the tab", tone: "plain" },
  { n: 11, text: "regains focus. Check the refresh", tone: "plain" },
  { n: 12, text: "interceptor in `auth/client.ts`.", tone: "plain" },
];

export default function TaskFilePreview() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-stone-line bg-slate-soft">
      <div className="flex items-center justify-between border-b border-stone-line px-4 py-2.5">
        <span className="font-mono text-xs text-chalk-dim">
          tasks/003-fix-session-timeout.md
        </span>
        <span className="rounded-full bg-dust/15 px-2 py-0.5 font-mono text-[11px] tracking-wide text-dust">
          in_progress
        </span>
      </div>
      <div className="px-4 py-4 font-mono text-[13px] leading-6">
        {LINES.map((line) => (
          <div key={line.n} className="flex gap-4">
            <span className="w-4 shrink-0 select-none text-right text-chalk-dim/50">
              {line.n}
            </span>
            <span
              className={
                line.tone === "dim"
                  ? "text-chalk-dim/70"
                  : line.tone === "key"
                  ? "text-chalk-dim"
                  : line.tone === "status"
                  ? "text-dust"
                  : line.tone === "heading"
                  ? "text-lichen"
                  : "text-chalk"
              }
            >
              {line.text || "\u00A0"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
