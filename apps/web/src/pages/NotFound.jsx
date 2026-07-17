import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate px-6 text-center text-chalk">
      <h1 className="font-display text-3xl font-semibold">
        No stone here.
      </h1>
      <p className="mt-3 max-w-sm text-chalk-dim">
        That path doesn't mark anything yet.
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
