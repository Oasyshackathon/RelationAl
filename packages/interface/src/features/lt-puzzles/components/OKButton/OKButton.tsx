import Link from "next/link";
import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type OKButtonProps = {} & BaseProps;

/**
 * OKButton
 * @keit0728
 */
export const OKButton = ({ className }: OKButtonProps) => {
  return (
    <Link href="/">
      <Button className={clsx(className)}>OK</Button>
    </Link>
  );
};
