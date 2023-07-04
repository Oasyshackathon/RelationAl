import { ChangeEvent, useState } from "react";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type InputProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
} & BaseProps;

/**
 * Input
 * @yU-kiki
 */
export const Input = ({ className, placeholder, onChange }: InputProps) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={clsx(
        className,
        "focus:outline-none",
        "focus:border-none",
      )}
    ></input>
  );
};
