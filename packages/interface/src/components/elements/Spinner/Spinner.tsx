import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type SpinnerProps = BaseProps;

/**
 * ローディング中にくるくる回るやつ
 * @keit0728
 * @param className 親要素から指定されたスタイル
 */
export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        "animate-spin",
        "rounded-full",
        "border-t-transparent",
        className,
      )}
    ></div>
  );
};
