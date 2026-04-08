type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-5 inline-flex rounded-full border border-biolume-400/25 bg-biolume-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-biolume-300">
        {eyebrow}
      </div>
      <h2 className="display-font glow-text text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
