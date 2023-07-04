import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useState } from "react";

export type ConsiderationTextBoxProps = {
  value?: string;
  onChange?: (value: string) => void;
} & BaseProps;

/**
 * ConsiderationTextBox
 * @zhihao404🚀🚀🚀
 */
export const ConsiderationTextBox = ({ className, value, onChange }: ConsiderationTextBoxProps) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      className={clsx(className)}
      value={inputValue}
      onChange={handleInputChange}
	  style={{ backgroundColor: "black",
	   		   color: "white",
			   width: "100%", 
			   height: "300px",
			}}
    />
  );
};
