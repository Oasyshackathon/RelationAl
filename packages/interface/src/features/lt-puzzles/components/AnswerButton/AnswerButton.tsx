import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type AnswerButtonProps = {} & BaseProps;

/**
 * AnswerButton
 * @zhihao404🚀🚀🚀
 */
export const AnswerButton = ({ className }: AnswerButtonProps) => {
  return <Button className={clsx(className)}>{"     "}回答する{"    "}</Button>;
};
