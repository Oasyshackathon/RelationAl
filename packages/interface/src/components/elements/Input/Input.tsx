import { ChangeEvent } from "react";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & BaseProps;

/**
 * Input
 * @yU-kiki
 */
export const Input = ({
  className,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(className, "focus:outline-none", "focus:border-none")}
    />
  );
};
