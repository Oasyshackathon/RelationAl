import { Rule, StartButton, Title } from "@/features/lt-puzzles/components";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import Link from "next/link";

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
        "mt-[100px]",
        "mx-[20px]",
        "mb-[20px]",
      )}
    >
      <div className={clsx("max-w-[512px]")}>
        <Title className={clsx("mb-[10px]")} />
        <Rule className={clsx("mb-[100px]")} />
        <div className={clsx("flex", "w-[100%]", "justify-center")}>
          <Link href="/page1">
            <StartButton className={clsx("")} />
          </Link>
        </div>
      </div>
    </div>
  );
};
