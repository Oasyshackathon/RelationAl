import {
  GiveUpButton,
  Incorrect,
  PrevButton,
} from "@/features/lt-puzzles/components";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage4Props = {} & BaseProps;

/**
 * MainPage4
 * @keit0728
 */
export const MainPage4 = ({ className }: MainPage4Props) => {
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
        <Incorrect className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-between")}>
          <PrevButton className={clsx("mr-[100px]")} />
          <GiveUpButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};