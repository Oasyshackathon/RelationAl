import { ChangeEvent, KeyboardEvent } from "react";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onCompositionStart?: (event: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (event: React.CompositionEvent<HTMLInputElement>) => void;
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
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      placeholder={placeholder}
      className={clsx(className, "focus:outline-none", "focus:border-none")}
    />
  );
};
