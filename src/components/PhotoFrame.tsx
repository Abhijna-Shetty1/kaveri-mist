type PhotoFrameProps = {
  filename: string;
  alt: string;
  gradient?: string;
  className?: string;
  objectPosition?: string;
};

export default function PhotoFrame({
  filename,
  alt,
  gradient = "from-canopy-800 via-canopy-700 to-canopy-950",
  className = "",
  objectPosition = "center",
}: PhotoFrameProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <img
        src={`/images/${filename}`}
        alt={alt}
        style={{ objectPosition }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-canopy-950/10" />
    </div>
  );
}