import { useLTPuzzleValue } from "@/hooks/useLTPuzzle";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ProblemProps = {} & BaseProps;

/**
 * Problem
 * @yU-kiki
 */
export const Problem = ({ className }: ProblemProps) => {
  const ltPuzzles = useLTPuzzleValue();

  return (
    <div className={clsx(className, "border-[1px]", "rounded-lg", "p-[8px]")}>
      <div className={clsx("font-bold", "mb-[10px]")}>問題</div>
      <div className={clsx("")}>{ltPuzzles.problem}</div>
    </div>
  );
};
