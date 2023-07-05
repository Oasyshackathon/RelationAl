import Link from "next/link";
import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type StillDontKnowButtonProps = {} & BaseProps;

/**
 * StillDontKnowButton
 * @zhihao404🚀🚀🚀
 */
export const StillDontKnowButton = ({
  className,
}: StillDontKnowButtonProps) => {
  return (
    <Link href="/page1">
      <Button className={clsx(className)}>まだわからない</Button>
    </Link>
  );
};
