import { Spinner } from "@/components/elements/Spinner";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
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
  loading,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
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
      {loading ? (
        <div
          className={clsx("flex", "justify-center", "items-center", "w-[100%]")}
        >
          <Spinner className={clsx("w-[20px]", "h-[20px]", "border-[2px]")} />
        </div>
      ) : (
        children
      )}
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
    "hover:bg-secondary/80",
    "text-gray-800",
  ),
};
