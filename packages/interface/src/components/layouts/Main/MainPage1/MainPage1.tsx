import { Ask } from "@/features/lt-puzzles/components/Ask";
import { Puzzle } from "@/features/lt-puzzles/components/Puzzle";
import { QuestionInput } from "@/features/lt-puzzles/components/QuestionInput";
import { SolvedButton } from "@/features/lt-puzzles/components/SolvedButton";
import { ltPuzzleState } from "@/stores/ltPuzzleState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilValue } from "recoil";

export type MainPage1Props = {} & BaseProps;

/**
 * MainPage1
 * @yU-kiki
 */
export const MainPage1 = ({ className }: MainPage1Props) => {
  const puzzle = useRecoilValue(ltPuzzleState);
  return (
    <div
      className={clsx(
        className,
        "flex",
        "flex-col",
        "items-center",
        "mt-[80px]",
        "mx-[20px]",
        "mb-[150px]",
        "md:mt-[100px]",
        "md:mb-[200px]",
      )}
    >
      <div className={clsx("max-w-[512px]", "min-w-[300px]")}>
        <Puzzle className={clsx("mb-[30px]")} />
        {/* TODO: #41 AIに質問を投げて回答させる */}
        <Ask puzzle={puzzle} className={clsx("mb-[30px]")} />
      </div>
      <div
        className={clsx(
          "fixed",
          "bottom-[20px]",
          "max-w-[512px]",
          "w-[90%]",
          "md:bottom-[50px]",
        )}
      >
        <div className={clsx("flex", "flex-col", "items-center")}>
          <SolvedButton className={clsx("")} />
          <QuestionInput
            className={clsx("w-[100%]", "mt-[10px]", "md:mt-[20px]")}
          />
        </div>
      </div>
    </div>
  );
};