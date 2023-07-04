import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MintingConfirmationProps = {} & BaseProps;

/**
 * MintingConfirmation
 * @keit0728
 */
export const MintingConfirmation = ({
  className,
}: MintingConfirmationProps) => {
  return <div className={clsx(className)}>この問題をミントしますか？</div>;
};
