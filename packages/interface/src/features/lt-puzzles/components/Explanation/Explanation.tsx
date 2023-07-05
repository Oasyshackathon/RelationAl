import { useLTPuzzleValue } from "@/hooks/useLTPuzzle";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ExplanationProps = {} & BaseProps;

/**
 * Explanation
 * @keit0728
 */
export const Explanation = ({ className }: ExplanationProps) => {
  const ltPuzzle = useLTPuzzleValue();

  return (
    <div className={clsx(className, "border-[1px]", "rounded-lg", "p-[8px]")}>
      <div className={clsx("font-bold", "mb-[10px]")}>解説</div>
      <div className={clsx("")}>{ltPuzzle.explanation}</div>
    </div>
  );
};
