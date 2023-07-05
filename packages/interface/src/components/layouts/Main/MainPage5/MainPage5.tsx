import { OKButton } from "@/features/lt-puzzles/components/OKButton";
import { SuccessMint } from "@/features/lt-puzzles/components/SuccessMint";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage5Props = {} & BaseProps;

/**
 * MainPage5
 * @keit0728
 */
export const MainPage5 = ({ className }: MainPage5Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex",
        "flex-col",
        "items-center",
        "mt-[100px]",
        "mx-[20px]",
        "mb-[20px]",
      )}
    >
      <div className={clsx("max-w-[512px]")}>
        <SuccessMint className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-center")}>
          <OKButton className={clsx("")} />
        </div>
      </div>
    </div>
  );
};
