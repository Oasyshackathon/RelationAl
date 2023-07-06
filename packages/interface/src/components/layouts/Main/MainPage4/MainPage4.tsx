import Link from "next/link";
import { GiveUpButton } from "@/features/lt-puzzles/components/GiveUpButton";
import { Incorrect } from "@/features/lt-puzzles/components/Incorrect";
import { PrevButton } from "@/features/lt-puzzles/components/PrevButton";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type MainPage4Props = {} & BaseProps;

/**
 * MainPage4
 * @keit0728
 */
export const MainPage4 = ({ className }: MainPage4Props) => {
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
        <Incorrect className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-between")}>
          <Link href="/page1">
            <PrevButton className={clsx("")} />
          </Link>
          <Link href="/page6">
            <GiveUpButton className={clsx("")} />
          </Link>
        </div>
      </div>
    </div>
  );
};
