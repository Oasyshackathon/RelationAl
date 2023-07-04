import {
  Answer,
  Problem,
  Question,
  QuestionInput,
  SolvedButton,
} from "@/features/lt-puzzles/components";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage1Props = {} & BaseProps;

/**
 * MainPage1
 * @yU-kiki
 */
export const MainPage1 = ({ className }: MainPage1Props) => {
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
        <Problem className={clsx("mb-[30px]")} />
        <Question className={clsx("mb-[30px]")} />
        <Answer className={clsx("mb-[30px]")} />
      </div>
      <div className={clsx("fixed", "bottom-[50px]")}>
        <div className={clsx("flex", "flex-col", "items-center")}>
          <SolvedButton className={clsx("w-[200px]", "mb-[20px]")} />
          <QuestionInput
            className={clsx("flex", "w-[512px]", "bg-primary-700")}
          />
        </div>
      </div>
    </div>
  );
};
