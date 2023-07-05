import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type QuestionProps = {} & BaseProps;

/**
 * Question
 * @yU-kiki
 */
export const Question = ({ className }: QuestionProps) => {
  const question = "女は男の知り合いか？";

  return (
    <div className={clsx(className)}>
      <div className={clsx("")}>{question}</div>
    </div>
  );
};
