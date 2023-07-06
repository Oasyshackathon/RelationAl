import { Explanation } from "@/features/lt-puzzles/components/Explanation";
import { OKButton } from "@/features/lt-puzzles/components/OKButton";
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
        "mx-[20px]",
        "mb-[20px]",
        "mt-[80px]",
        "md:mt-[100px]",
      )}
    >
      <div className={clsx("max-w-[512px]", "min-w-[300px]")}>
        <Explanation className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-center")}>
          <OKButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
