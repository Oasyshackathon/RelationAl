import { Explanation } from "@/features/lt-puzzles/components/Explanation";
import { MintingConfirmation } from "@/features/lt-puzzles/components/MintingConfirmation";
import { NoButton } from "@/features/lt-puzzles/components/NoButton";
import { YesButton } from "@/features/lt-puzzles/components/YesButton";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage3Props = {} & BaseProps;

/**
 * MainPage3
 * @keit0728
 */
export const MainPage3 = ({ className }: MainPage3Props) => {
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
        <div className={clsx("mb-[20px]")}>正解です！</div>
        <Explanation className={clsx("mb-[30px]")} />
        <MintingConfirmation className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-between")}>
          <YesButton className={clsx("mr-[100px]")} />
          <NoButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
