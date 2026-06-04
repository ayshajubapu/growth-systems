import { cn } from "@/lib/utils";

interface WeightedHeadingProps {
  text: string;
  className?: string;
  normalClassName?: string;
  lightClassName?: string;
}

const splitHeading = (text: string) => {
  const separators = [" — ", " – ", ": ", " | "];
  const separator = separators.find((item) => text.includes(item));

  if (separator) {
    const [first, ...rest] = text.split(separator);

    return {
      normal: first.trim(),
      light: rest.join(separator).trim(),
    };
  }

  const words = text.trim().split(/\s+/);
  const splitAt = Math.max(1, Math.ceil(words.length / 2));

  return {
    normal: words.slice(0, splitAt).join(" "),
    light: words.slice(splitAt).join(" "),
  };
};

const WeightedHeading = ({
  text,
  className,
  normalClassName,
  lightClassName,
}: WeightedHeadingProps) => {
  const { normal, light } = splitHeading(text);

  return (
    <h1
      className={cn(
        "font-display leading-[0.95] tracking-tight",
        className
      )}
    >
      <span
        className={cn(
          "font-semibold text-foreground",
          normalClassName
        )}
      >
        {normal}
      </span>

      {light && (
        <>
          {" "}
          <span
            className={cn(
              "font-extralight text-muted-foreground opacity-70",
              lightClassName
            )}
          >
            {light}
          </span>
        </>
      )}
    </h1>
  );
};

export default WeightedHeading;