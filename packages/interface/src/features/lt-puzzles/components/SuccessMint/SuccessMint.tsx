import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type SuccessMintProps = {} & BaseProps;

/**
 * SuccessMint
 * @keit0728
 */
export const SuccessMint = ({ className }: SuccessMintProps) => {
  return <div className={clsx(className)}>ミント成功🎉</div>;
};
