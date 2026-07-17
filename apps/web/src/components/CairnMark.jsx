// The mark is the data model: each stone is a task, colored by status.
// Bottom = done, middle = in progress, top = todo. Stacking order matters,
// the way finished work sits underneath what's still open.
export default function CairnMark({ className = "", animated = true }) {
  return (
    <svg
      viewBox="0 0 240 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="A cairn made of four stacked stones, representing done, in-progress, and open tasks"
    >
      <ellipse cx="120" cy="238" rx="86" ry="10" fill="#000000" opacity="0.25" />

      {/* base stone — done */}
      <path
        d="M28 214 C22 188 46 168 82 170 C120 172 170 168 200 190 C214 200 210 218 190 222 C150 230 60 230 34 222 C30 220 29 218 28 214Z"
        fill="var(--color-lichen-soft)"
        stroke="var(--color-lichen)"
        strokeWidth="2"
        className={animated ? "cairn-stone" : ""}
        style={{ animationDelay: "0ms" }}
      />

      {/* second stone — done */}
      <path
        d="M48 170 C44 150 64 136 96 138 C130 140 166 136 182 154 C192 166 186 178 170 180 C136 186 70 186 54 178 C50 176 49 174 48 170Z"
        fill="var(--color-lichen)"
        stroke="var(--color-lichen-soft)"
        strokeWidth="2"
        className={animated ? "cairn-stone" : ""}
        style={{ animationDelay: "80ms" }}
      />

      {/* third stone — in progress */}
      <path
        d="M64 134 C61 116 80 106 104 108 C130 110 154 106 164 122 C170 132 164 142 150 144 C124 148 78 148 68 142 C65 140 64 138 64 134Z"
        fill="var(--color-dust)"
        stroke="#a9885f"
        strokeWidth="2"
        className={animated ? "cairn-stone" : ""}
        style={{ animationDelay: "160ms" }}
      />

      {/* top stone — todo, hollow */}
      <path
        d="M86 106 C84 92 98 84 114 86 C130 88 144 86 148 98 C151 106 146 114 136 116 C118 119 96 118 90 112 C88 110 87 108 86 106Z"
        fill="var(--color-slate)"
        stroke="var(--color-chalk-dim)"
        strokeWidth="2.5"
        className={animated ? "cairn-stone" : ""}
        style={{ animationDelay: "240ms" }}
      />

      <style>{`
        .cairn-stone {
          transform-origin: center;
          animation: settle 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        @keyframes settle {
          from { transform: translateY(-14px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cairn-stone { animation: none; opacity: 1; }
        }
      `}</style>
    </svg>
  );
}
