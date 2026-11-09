import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  /** Banner background color (any CSS color). */
  backgroundColor?: string;
  /** Heading text color (any CSS color). */
  textColor?: string;
};

const bannerStyle: CSSProperties = {
  textAlign: "center",
  padding: "24px 16px",
};

export function Heading({
  level = 1,
  children,
  backgroundColor = "#1e3a8a",
  textColor = "#ffffff",
  style,
  ...rest
}: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <header className="top-banner" style={{ ...bannerStyle, backgroundColor }}>
      <Tag style={{ margin: 0, color: textColor, ...style }} {...rest}>
        {children}
      </Tag>
    </header>
  );
}
