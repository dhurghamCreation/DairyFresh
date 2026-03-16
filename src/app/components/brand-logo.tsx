import { cn } from "./ui/utils";

interface BrandLogoProps {
  className?: string;
  textClassName?: string;
  subtitleClassName?: string;
  showSubtitle?: boolean;
}

export function BrandLogo({
  className,
  textClassName,
  subtitleClassName,
  showSubtitle = true,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-200/70">
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10 2h4v3l1 2v13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7l1-2V2z" />
          <path d="M10 8h4" />
          <path d="M12 12v4" />
        </svg>
      </div>

      <div className="leading-tight">
        <span
          className={cn(
            "block text-2xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 bg-clip-text text-transparent tracking-tight",
            textClassName,
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          DairyFresh
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "block text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal-700/70 leading-none",
              subtitleClassName,
            )}
          >
            Since 1995
          </span>
        )}
      </div>
    </div>
  );
}