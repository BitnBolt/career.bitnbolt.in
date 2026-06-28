interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow ${dark ? "text-blue-400" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`heading-section ${eyebrow ? "mt-2" : ""} ${dark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed sm:text-base ${dark ? "text-gray-300" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
