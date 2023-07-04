import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type NotsureButtonProps = {} & BaseProps;

/**
 * NotsureButton
 * @zhihao404🚀🚀🚀
 */
export const NotsureButton = ({ className }: NotsureButtonProps) => {
  return <Button className={clsx(className)}>まだわからない</Button>;
};
