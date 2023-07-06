import Link from "next/link";
import { useLTPuzzleValue } from "@/hooks/useLTPuzzle";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type SuccessMintProps = {} & BaseProps;

/**
 * SuccessMint
 * @keit0728
 */
export const SuccessMint = ({ className }: SuccessMintProps) => {
  const ltPuzzle = useLTPuzzleValue();

  return (
    <div className={clsx(className)}>
      <div className={clsx("mb-[10px]", "font-bold")}>ミント成功🎉</div>
      <Link
        className={clsx("text-blue-500", "font-bold")}
        href={`https://scan.sandverse.oasys.games/tx/${ltPuzzle.transactionHash}`}
        target="_blank"
      >
        BlockScoutで確認する
      </Link>
    </div>
  );
};
