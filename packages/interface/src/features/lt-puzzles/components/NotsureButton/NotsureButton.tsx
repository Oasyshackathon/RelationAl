import Link from "next/link";
import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type NotSureButtonProps = {} & BaseProps;

/**
 * NotSureButton
 * @zhihao404🚀🚀🚀
 */
export const NotSureButton = ({ className }: NotSureButtonProps) => {
  return (
    <Link href="/page1">
      <Button className={clsx(className)}>まだわからない</Button>
    </Link>
  );
};
