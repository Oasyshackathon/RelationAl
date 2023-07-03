import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  onClick?: () => void;
} & BaseProps;

/**
 * Button
 * @keit0728
 */
export const Button = ({
  className,
  children,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        variants[variant],
        "font-bold",
        "px-[16px]",
        "py-[10px]",
        "rounded-lg",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const variants = {
  primary: clsx(
    "bg-primary",
    "border-[1px]",
    "border-gray-500",
    "hover:bg-primary/30",
  ),
  secondary: clsx(
    "bg-secondary",
    "border-[1px]",
    "border-gray-500",
    "hover:bg-secondary/30",
    "text-gray-800",
  ),
};
