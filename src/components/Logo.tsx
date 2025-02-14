import logoImage from "@/assets/images/sphereal-logo.svg?url";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Logo = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, style, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "size-10", // Base size
        className
      )}
      style={{
        background:
          "conic-gradient(from 45deg, var(--color-violet-400), var(--color-fuchsia-400), var(--color-amber-300), var(--color-teal-300), var(--color-violet-400))",
        maskImage: `url(${logoImage.src})`,
        WebkitMaskImage: `url(${logoImage.src})`, // Add Webkit prefix for compatibility
        maskSize: "contain",
        WebkitMaskSize: "contain", // Add Webkit prefix for compatibility
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat", // Add Webkit prefix for compatibility
        maskPosition: "center",
        WebkitMaskPosition: "center", // Add Webkit prefix for compatibility
        ...style,
      }}
      {...otherProps}
    ></div>
  );
};