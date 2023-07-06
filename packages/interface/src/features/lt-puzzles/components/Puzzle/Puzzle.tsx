import { useLTPuzzleValue } from "@/hooks/useLTPuzzle";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type PuzzleProps = {} & BaseProps;

/**
 * Puzzle
 * @yU-kiki
 */
export const Puzzle = ({ className }: PuzzleProps) => {
  const ltPuzzles = useLTPuzzleValue();

  return (
    <div className={clsx(className, "border-[1px]", "rounded-lg", "p-[8px]")}>
      <div className={clsx("font-bold", "mb-[10px]")}>{ltPuzzles.title}</div>
      <div className={clsx("")}>{ltPuzzles.description}</div>
    </div>
  );
};
