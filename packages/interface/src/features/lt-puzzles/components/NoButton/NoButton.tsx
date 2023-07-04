import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type NoButtonProps = {} & BaseProps;

/**
 * NoButton
 * @keit0728
 */
export const NoButton = ({ className }: NoButtonProps) => {
  //TODO: #20 ボタン押したらホームに戻る

  return <Button className={clsx(className)}>いいえ</Button>;
};
