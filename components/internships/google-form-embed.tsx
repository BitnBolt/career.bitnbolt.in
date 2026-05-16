const formUrl = process.env.NEXT_PUBLIC_INTERNSHIP_GOOGLE_FORM_URL;

interface GoogleFormEmbedProps {
  compact?: boolean;
}

export function GoogleFormEmbed({ compact = false }: GoogleFormEmbedProps) {
  if (!formUrl) {
    return (
      <div className="border border-border bg-surface-muted p-8 text-center">
        <p className="text-sm font-medium text-foreground">
          Application form not configured
        </p>
        <p className="mt-2 text-sm text-muted">
          Set{" "}
          <code className="bg-chip-bg px-1 py-0.5 text-xs">
            NEXT_PUBLIC_INTERNSHIP_GOOGLE_FORM_URL
          </code>{" "}
          in your environment to the Google Form embed URL (ending with{" "}
          <code className="bg-chip-bg px-1 py-0.5 text-xs">/viewform?embedded=true</code>
          ).
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-surface">
      <iframe
        src={formUrl}
        width="100%"
        height={compact ? "900" : "1200"}
        className={`block w-full border-0 ${compact ? "min-h-[520px]" : "min-h-[800px]"}`}
        title="BitnBolt internship application"
      >
        Loading application form…
      </iframe>
    </div>
  );
}
