import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type YesButtonProps = {} & BaseProps;

/**
 * YesButton
 * @keit0728
 */
export const YesButton = ({ className }: YesButtonProps) => {
  //TODO: #21 ボタン押したらミント処理

  return <Button className={clsx(className)}>はい</Button>;
};
