import { Link } from "react-router-dom";
import CairnMark from "../components/CairnMark.jsx";
import InstallCommand from "../components/InstallCommand.jsx";
import TaskFilePreview from "../components/TaskFilePreview.jsx";

const VERBS = [
  {
    cmd: "cairn init",
    result: "Creates PROJECT.md and a tasks/ folder in your repo. Nothing else.",
  },
  {
    cmd: "cairn add",
    result: "Writes a new task file with frontmatter you can read, edit, or diff.",
  },
  {
    cmd: "cairn list --status in_progress",
    result: "Reads the frontmatter across every file and prints what's open.",
  },
  {
    cmd: "cairn done 003",
    result: "Flips a status field. That's the whole update.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate text-chalk">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg font-medium tracking-tight">
          cairn
        </span>
        <nav className="flex items-center gap-6 font-mono text-sm text-chalk-dim">
          <a href="#how-it-works" className="hover:text-chalk">
            how it works
          </a>
          <Link to="/docs" className="hover:text-chalk">
            docs
          </Link>
          <a
            href="https://github.com/ravipatelctf/cairn"
            className="rounded-md border border-stone-line px-3 py-1.5 hover:border-lichen hover:text-lichen"
          >
            source
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-12 text-center sm:pb-28 sm:pt-16">
        <CairnMark className="h-40 w-auto sm:h-48" />
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-lichen">
          project management, minus the management overhead
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Your tasks live in the repo, not in a login screen.
        </h1>
        <p className="mt-5 max-w-xl text-balance text-base text-chalk-dim sm:text-lg">
          Cairn is a command-line tool that tracks work as plain markdown
          files. No server, no account, no database — just files your editor,
          your terminal, and your coding agent can all already read.
        </p>
        <div className="mt-9 w-full max-w-xl">
          <InstallCommand />
        </div>
        <p className="mt-4 font-mono text-xs text-chalk-dim">
          macOS and Linux. Takes about four seconds.
        </p>
      </section>

      {/* WHY FILE-BASED */}
      <section className="border-t border-stone-line bg-slate-soft/40">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            You don't need a database for a to-do list of one.
          </h2>
          <p className="mt-3 max-w-2xl text-chalk-dim">
            Jira exists to coordinate people. If it's just you, the
            coordination overhead — boards, tickets, an API you have to
            authenticate against — is solving a problem you don't have.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-stone-line bg-slate p-5">
              <p className="font-mono text-xs text-chalk-dim">no server</p>
              <p className="mt-2 text-sm text-chalk">
                Tasks are files in your repo. They exist as long as your repo
                does.
              </p>
            </div>
            <div className="rounded-lg border border-stone-line bg-slate p-5">
              <p className="font-mono text-xs text-chalk-dim">no api calls</p>
              <p className="mt-2 text-sm text-chalk">
                Your coding agent reads a task by opening a file, not by
                calling a tool through MCP.
              </p>
            </div>
            <div className="rounded-lg border border-stone-line bg-slate p-5">
              <p className="font-mono text-xs text-chalk-dim">no lock-in</p>
              <p className="mt-2 text-sm text-chalk">
                Stop using Cairn and you're left with... markdown files. That
                was always the point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEE THE FILE */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              This is the whole database.
            </h2>
            <p className="mt-3 max-w-md text-chalk-dim">
              One file, one task. Status lives in the frontmatter, notes live
              in the body. Standard markdown, so it renders on GitHub, opens
              in any editor, and reads cleanly to an LLM without a parser.
            </p>
          </div>
          <TaskFilePreview />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-t border-stone-line bg-slate-soft/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Four commands. That's the surface area.
          </h2>
          <div className="mt-10 space-y-3">
            {VERBS.map((v) => (
              <div
                key={v.cmd}
                className="flex flex-col gap-1 rounded-lg border border-stone-line bg-slate px-5 py-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <code className="w-full shrink-0 font-mono text-sm text-lichen sm:w-64">
                  {v.cmd}
                </code>
                <span className="text-sm text-chalk-dim">{v.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / SECOND CTA */}
      <footer className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-6 rounded-xl border border-stone-line bg-slate-soft p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">
              Run it once. See for yourself.
            </h3>
            <p className="mt-2 max-w-md text-sm text-chalk-dim">
              The install prints one line back to you: I'm building this, and
              I'm glad you're my first user.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <InstallCommand />
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 font-mono text-xs text-chalk-dim sm:flex-row">
          <span>cairn - made with ❤️</span>
          <span><a href="https://www.ravipatelctf.com/" className="hover:text-white">ravipatelctf.com</a></span>
        </div>
      </footer>
    </div>
  );
}
