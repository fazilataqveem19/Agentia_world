import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionBorder = ({ borderTop, className, ...props }: { borderTop?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)]",
        borderTop && "border-t",
        className
      )}
      {...props}
    />
  );
};
