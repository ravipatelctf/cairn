import { Link } from "react-router-dom";

export default function Docs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate px-6 text-center text-chalk">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-lichen">
        docs
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold">
        Not written yet.
      </h1>
      <p className="mt-3 max-w-sm text-chalk-dim">
        The command reference is coming once the CLI itself is further along.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md border border-stone-line px-4 py-2 font-mono text-sm hover:border-lichen hover:text-lichen"
      >
        back home
      </Link>
    </div>
  );
}
