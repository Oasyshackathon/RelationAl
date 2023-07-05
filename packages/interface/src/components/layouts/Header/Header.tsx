import { Logo } from "@/components/elements/Logo";
import { BaseProps } from "@/types/BaseProps";
import { Web3Button } from "@web3modal/react";
import clsx from "clsx";

export type HeaderProps = {} & BaseProps;

/**
 * Header
 * @keit0728
 */
export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={clsx(
        className,
        "fixed",
        "w-[100%]",
        "top-0",
        "z-[1]",
        "bg-black/30",
        "p-[10px]",
        "flex",
        "items-center",
        "justify-between",
      )}
    >
      <Logo />
      <Web3Button />
    </header>
  );
};
