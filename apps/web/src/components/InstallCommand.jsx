import { useState } from "react";

const COMMAND = "curl -fsSL cairn.ravipatelctf.com/install.sh | sh";

export default function InstallCommand() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard denied — the command is still selectable by hand.
    }
  }

  return (
    <div className="w-full max-w-xl rounded-lg border border-stone-line bg-slate-soft shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
      <div className="flex items-center gap-2 border-b border-stone-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-stone" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone" />
        <span className="ml-2 font-mono text-xs text-chalk-dim">terminal</span>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <code className="overflow-x-auto whitespace-nowrap font-mono text-sm text-chalk sm:text-[15px]">
          <span className="text-lichen">$</span> {COMMAND}
        </code>
        <button
          onClick={handleCopy}
          className="shrink-0 rounded-md border border-stone-line bg-stone px-3 py-1.5 font-mono text-xs text-chalk transition-colors hover:border-lichen hover:text-lichen"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
    </div>
  );
}
