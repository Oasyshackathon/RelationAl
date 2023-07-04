import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type StartButtonProps = {} & BaseProps;

/**
 * StartButton
 * @keit0728
 */
export const StartButton = ({ className }: StartButtonProps) => {
  //TODO: #17 ボタン押したらページ1に遷移

  return <Button className={clsx(className)}>GAME START</Button>;
};
