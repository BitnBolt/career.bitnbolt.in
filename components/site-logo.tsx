import Image from "next/image";
import Link from "next/link";

export const LOGO_PATH = "/logo.png";

interface SiteLogoProps {
  linked?: boolean;
  showTagline?: boolean;
  framed?: boolean;
  priority?: boolean;
  className?: string;
  heightClass?: string;
}

export function SiteLogo({
  linked = true,
  showTagline = false,
  framed = false,
  priority = false,
  className = "",
  heightClass = "h-9",
}: SiteLogoProps) {
  const image = (
    <Image
      src={LOGO_PATH}
      alt="BitnBolt"
      width={1035}
      height={1035}
      priority={priority}
      className={`${heightClass} w-auto max-w-full object-contain object-left`}
    />
  );

  const inner = (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      {framed ? (
        <span className="rounded-lg bg-white p-1 shadow-sm ring-1 ring-black/5">
          {image}
        </span>
      ) : (
        image
      )}
      {showTagline ? (
        <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-blue-600 sm:inline">
          Careers
        </span>
      ) : null}
    </span>
  );

  const classes = `inline-flex min-w-0 shrink items-center ${className}`;

  if (linked) {
    return (
      <Link href="/" className={`${classes} transition-opacity hover:opacity-90`}>
        {inner}
      </Link>
    );
  }

  return <span className={classes}>{inner}</span>;
}
