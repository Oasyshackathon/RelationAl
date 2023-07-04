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

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <textarea
        className={clsx(className)}
        value={inputValue}
        onChange={handleInputChange}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          padding: "0",
          margin: "0",
          resize: "none",
          textAlign: "center",
          overflowWrap: "break-word",
        }}
      />
    </div>
  );
};
