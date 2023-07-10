import { LTPuzzleModel } from "@/models/LTPuzzleModel";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type AskProps = {
  puzzle: LTPuzzleModel;
} & BaseProps;

/**
 * Ask
 * @yU-kiki
 */
export const Ask = ({ puzzle, className }: AskProps) => {
  const qaHistories = puzzle.qaHistories;

  return (
    <div className={clsx(className)}>
      {qaHistories.map((history, index) => (
        <div
          key={index}
          className={clsx((className = "flex flex-col items-start"))}
        >
          <div
            className={clsx(
              "self-end max-w-[300px] mb-[20px] p-[8px] border-[1px] rounded-lg rounded-br-none",
            )}
          >
            {history.question}
          </div>
          <div
            className={clsx(
              "self-start max-w-[300px] mb-[20px] p-[8px] border-[1px] rounded-lg rounded-bl-none",
            )}
          >
            {history.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
