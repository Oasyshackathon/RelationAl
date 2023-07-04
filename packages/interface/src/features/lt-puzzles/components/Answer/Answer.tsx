import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";


export type AnswerProps = {} & BaseProps;

/**
 * Answer
 * @yU-kiki
 */
export const Answer = ({ className }: AnswerProps) => {
  return (
    <div className={clsx(className)}>
      <div className={clsx("")}>はい</div>
    </div>
  );
};