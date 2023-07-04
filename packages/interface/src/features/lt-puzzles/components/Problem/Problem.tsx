import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";


export type ProblemProps = {} & BaseProps;

/**
 * Problem
 * @yU-kiki
 */
export const Problem = ({ className }: ProblemProps) => {
  const problem =
    "あるホテルで多くの死者を出す火災が起き、男と女が生き残った。後日、女は男を殺した。なぜか。";

  return (
    <div className={clsx(className)}>
      <div className={clsx("font-bold")}>問題</div>
      <div className={clsx("")}>{problem}</div>
    </div>
  );
};