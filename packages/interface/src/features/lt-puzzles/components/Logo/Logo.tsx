import Link from "next/link";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type LogoProps = {} & BaseProps;

/**
 * Logo
 * @keit0728
 */
export const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={clsx("font-bold", "text-2xl")} href="/">
      RelationAl
    </Link>
  );
};
