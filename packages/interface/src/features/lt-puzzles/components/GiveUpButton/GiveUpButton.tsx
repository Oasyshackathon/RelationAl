import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type GiveUpButtonProps = {} & BaseProps;

/**
 * GiveUpButton
 * @keit0728
 */
export const GiveUpButton = ({ className }: GiveUpButtonProps) => {
  //TODO: #25 ボタン押したらページ6に遷移

  return <Button className={clsx(className)}>ギブアップ</Button>;
};
