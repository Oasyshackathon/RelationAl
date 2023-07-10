import { Input } from "@/components/elements/Input/Input";
import { SendButton } from "@/features/lt-puzzles/components/SendButton";
import { useLTPuzzleState } from "@/hooks/useLTPuzzle";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type QuestionInputProps = {} & BaseProps;

/**
 * QuestionInput
 * @yU-kiki
 */
export const QuestionInput = ({ className }: QuestionInputProps) => {
  const [ltPuzzle, ltPuzzleController] = useLTPuzzleState();
  const input = "はい / いいえ で答えられる質問";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    ltPuzzleController.setQuestion(event.target.value);
  };

  return (
    <div
      className={clsx(
        className,
        "flex",
        "p-[8px]",
        "rounded-lg",
        "bg-primary-700",
      )}
    >
      <Input
        value={ltPuzzle.question}
        placeholder={input}
        className={clsx("bg-primary-700", "w-[100%]")}
        onChange={handleInputChange}
      />
      <SendButton />
    </div>
  );
};
