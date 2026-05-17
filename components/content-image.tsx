import Image from "next/image";
import type { PageImage } from "@/lib/page-images";

type AspectRatio = "16/9" | "4/3" | "3/2" | "1/1" | "21/9" | "auto";

const aspectClasses: Record<AspectRatio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
  auto: "min-h-[200px]",
};

interface ContentImageProps {
  image: PageImage;
  aspect?: AspectRatio;
  priority?: boolean;
  className?: string;
  showAssetHint?: boolean;
  objectFit?: "cover" | "contain";
}

export function ContentImage({
  image,
  aspect = "4/3",
  priority = false,
  className = "",
  showAssetHint = true,
  objectFit = "cover",
}: ContentImageProps) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden border border-border bg-surface-muted ${aspectClasses[aspect]}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className={`h-full w-full ${objectFit === "cover" ? "object-cover" : "object-contain"} object-center`}
        />
      </div>
      {showAssetHint ? (
        <figcaption className="mt-2 hidden text-[10px] text-muted sm:block">
          Replace: <code className="bg-chip-bg px-1 py-0.5">public{image.asset}</code>
        </figcaption>
      ) : null}
    </figure>
  );
}
