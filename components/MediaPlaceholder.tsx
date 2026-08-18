interface MediaPlaceholderProps {
  aspectRatio?: "16/9" | "16/10" | "4/3" | "1/1" | "21/9" | "3/2" | "4/5" | "auto";
  label?: string;
  className?: string;
  caption?: string;
  imageId?: string;
}

export function MediaPlaceholder({
  aspectRatio = "16/9",
  label = "Media Placeholder",
  className = "",
  caption,
  imageId,
}: MediaPlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "16/10": "aspect-[16/10]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-[1/1]",
    "21/9": "aspect-[21/9]",
    "3/2": "aspect-[3/2]",
    "4/5": "aspect-[4/5]",
    auto: "",
  }[aspectRatio];

  if (imageId) {
    const src = imageId.startsWith("http") || imageId.startsWith("/")
      ? imageId
      : `https://res.cloudinary.com/df6nnksd2/image/upload/${imageId}`;

    return (
      <figure className={`w-full flex flex-col gap-2 ${className}`}>
        <div
          className={`w-full bg-surface-custom border border-warm-white/10 rounded-lg overflow-hidden relative ${aspectClass}`}
        >
          <img
            src={src}
            alt={label}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {caption && (
          <figcaption className="text-xs text-stone-custom font-light italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={`w-full flex flex-col gap-2 ${className}`}>
      <div
        className={`w-full bg-surface-custom border border-warm-white/10 rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 relative group transition-colors hover:border-warm-white/20 ${aspectClass}`}
      >
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(242,239,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,233,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Central visual indicator */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2">
          <div className="w-8 h-8 rounded-full border border-warm-white/20 flex items-center justify-center text-stone-custom">
            <span className="text-[10px] tracking-widest uppercase">HD</span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-platinum/60 font-medium">
            {label}
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="text-xs text-stone-custom font-light italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
