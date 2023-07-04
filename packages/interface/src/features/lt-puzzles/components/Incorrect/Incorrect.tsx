import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type IncorrectProps = {} & BaseProps;

/**
 * Incorrect
 * @keit0728
 */
export const Incorrect = ({ className }: IncorrectProps) => {
  return <div className={clsx(className)}>不正解です😭</div>;
};
