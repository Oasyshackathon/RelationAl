import { useLTPuzzleState } from "@/hooks/useLTPuzzle";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ConsiderationTextBoxProps = {
  value?: string;
} & BaseProps;

/**
 * ConsiderationTextBox
 * @zhihao404🚀🚀🚀
 */
export const ConsiderationTextBox = ({
  className,
  value,
}: ConsiderationTextBoxProps) => {
  const [ltPuzzle, ltPuzzleController] = useLTPuzzleState();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    ltPuzzleController.setInference(event.target.value);
  };

  return (
    <textarea
      className={clsx(className, "bg-primary-700", "p-[8px]", "rounded-lg")}
      value={ltPuzzle.inference}
      onChange={handleInputChange}
      placeholder="あなたの推理"
    />
  );
};
