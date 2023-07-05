import Link from "next/link";
import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type SolvedButtonProps = {} & BaseProps;

/**
 * SolvedButton
 * @yU-kiki
 */
export const SolvedButton = ({ className }: SolvedButtonProps) => {
  return (
    <Link href="/page2">
      <Button className={clsx(className)}>謎は解けましたか？</Button>
    </Link>
  );
};
