import { AnswerButton } from "@/features/lt-puzzles/components/AnswerButton";
import { ConsiderationTextBox } from "@/features/lt-puzzles/components/ConsiderationTextBox";
import { NotSureButton } from "@/features/lt-puzzles/components/NotSureButton";
import { Problem } from "@/features/lt-puzzles/components/Problem";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage2Props = {} & BaseProps;

/**
 * MainPage2
 * @zhihao404🚀🚀🚀
 */
export const MainPage2 = ({ className }: MainPage2Props) => {
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
      <div className={clsx("max-w-[512px]", "w-[100%]")}>
        <Problem className={clsx("mb-[30px]")} />
        <ConsiderationTextBox
          className={clsx("mb-[20px]", "w-[100%]", "h-[200px]")}
        />
        <div className={clsx("flex", "justify-between")}>
          <NotSureButton className={clsx("")} />
          <AnswerButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
