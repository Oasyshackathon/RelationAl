import { OKButton } from "@/features/lt-puzzles/components/OKButton";
import { Explanation } from "@/features/lt-puzzles/components/Explanation";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage6Props = {} & BaseProps;

/**
 * MainPage6
 * @uchiyoshi
 */
export const MainPage6 = ({ className }: MainPage6Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex",
        "flex-col",
        "items-center",
        "mt-[100px]",
        "mx-[20px]",
        "mb-[20px]",
      )}
    >
      <div className={clsx("max-w-[512px]")}>
        <Explanation className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-center")}>
          <OKButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
