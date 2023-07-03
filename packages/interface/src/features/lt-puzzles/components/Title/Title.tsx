import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type TitleProps = {} & BaseProps;

/**
 * Title
 * @keit0728
 */
export const Title = ({ className }: TitleProps) => {
  return (
    <div className={clsx(className, "text-4xl", "font-bold")}>RelationAl</div>
  );
};
