import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type PrevButtonProps = {} & BaseProps;

/**
 * PrevButton
 * @keit0728
 */
export const PrevButton = ({ className }: PrevButtonProps) => {
  //TODO: #24 ボタン押したらページ1に遷移

  return <Button className={clsx(className)}>戻る</Button>;
};
