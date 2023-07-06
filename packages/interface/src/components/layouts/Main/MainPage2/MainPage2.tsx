import { AnswerButton } from "@/features/lt-puzzles/components/AnswerButton";
import { ConsiderationTextBox } from "@/features/lt-puzzles/components/ConsiderationTextBox";
import { Puzzle } from "@/features/lt-puzzles/components/Puzzle";
import { StillDontKnowButton } from "@/features/lt-puzzles/components/StillDontKnowButton";
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
        "mx-[20px]",
        "mb-[20px]",
        "mt-[80px]",
        "md:mt-[100px]",
      )}
    >
      <div className={clsx("max-w-[512px]", "w-[100%]")}>
        <Puzzle className={clsx("mb-[30px]")} />
        <ConsiderationTextBox
          className={clsx("mb-[20px]", "w-[100%]", "h-[120px]", "md:h-[200px]")}
        />
        <div className={clsx("flex", "justify-between")}>
          <StillDontKnowButton className={clsx("")} />
          <AnswerButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
