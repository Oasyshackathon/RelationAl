import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ConsiderationProps = {} & BaseProps;

/**
 * Consideration
 * @zhihao404🚀🚀🚀
 */
export const Consideration = ({ className }: ConsiderationProps) => {
  return (
	<div className={clsx(className)}>
      <div className={clsx("")}>あなたの推理</div>
    </div>
  );
};
