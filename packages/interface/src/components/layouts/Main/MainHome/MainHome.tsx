import { ProductName } from "@/components/elements/ProductName";
import { Rule } from "@/features/lt-puzzles/components/Rule";
import { StartButton } from "@/features/lt-puzzles/components/StartButton";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainHomeProps = {} & BaseProps;

/**
 * MainHome
 * @keit0728
 */
export const MainHome = ({ className }: MainHomeProps) => {
  return (
    <div
      className={clsx(
        className,
        "flex",
        "flex-col",
        "items-center",
        "mx-[20px]",
        "mb-[20px]",
        "mt-[80px]",
        "md:mt-[100px]",
      )}
    >
      <div className={clsx("max-w-[512px]", "min-w-[300px]")}>
        <ProductName className={clsx("mb-[30px]")} />
        <Rule className={clsx("mb-[100px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-center")}>
          <StartButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
