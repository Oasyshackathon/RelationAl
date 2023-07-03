import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type LoginButtonProps = {} & BaseProps;

/**
 * LoginButton
 * @keit0728
 */
export const LoginButton = ({ className }: LoginButtonProps) => {
  return <Button className={clsx(className)}>LOGIN</Button>;
};
