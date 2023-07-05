import {
  Explanation,
  MintingConfirmation,
  NoButton,
  YesButton,
} from "@/features/lt-puzzles/components";
import { BaseProps } from "@/types/BaseProps";
import Link from "next/link";
import clsx from "clsx";

export type MainPage3Props = {} & BaseProps;

/**
 * MainPage3
 * @keit0728
 */
export const MainPage3 = ({ className }: MainPage3Props) => {
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
        <Explanation className={clsx("mb-[30px]")} />
        <MintingConfirmation className={clsx("mb-[30px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-between")}>
          <Link href="/page5">
            <YesButton className={clsx("mr-[100px]")} />
          </Link>
          <Link href="/">
            <NoButton className={clsx("")} />
          </Link>
        </div>
      </div>
    </div>
  );
};
