import { useState } from "react";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ConsiderationTextBoxProps = {
  value?: string;
  onChange?: (value: string) => void;
} & BaseProps;

/**
 * ConsiderationTextBox
 * @zhihao404🚀🚀🚀
 */
export const ConsiderationTextBox = ({
  className,
  value,
  onChange,
}: ConsiderationTextBoxProps) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <textarea
      className={clsx(className, "bg-primary-700", "p-[8px]", "rounded-lg")}
      value={inputValue}
      onChange={handleInputChange}
      placeholder="あなたの推理"
    />
  );
};
