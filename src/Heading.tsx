import type { HTMLAttributes, ReactNode } from "react";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export function Heading({ level = 1, children, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag {...rest}>{children}</Tag>;
}
