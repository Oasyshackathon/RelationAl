import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ProductNameProps = {} & BaseProps;

/**
 * ProductName
 * @keit0728
 */
export const ProductName = ({ className }: ProductNameProps) => {
  return (
    <div className={clsx(className, "text-4xl", "font-bold")}>RelationAl</div>
  );
};
