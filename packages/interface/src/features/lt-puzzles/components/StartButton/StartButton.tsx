import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type StartButtonProps = {} & BaseProps;

/**
 * StartButton
 * @keit0728
 */
export const StartButton = ({ className }: StartButtonProps) => {
  return <Button className={clsx(className)}>GAME START</Button>;
};
