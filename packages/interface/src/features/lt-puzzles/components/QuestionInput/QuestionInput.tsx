import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input/Input";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type QuestionInputProps = {} & BaseProps;

/**
 * QuestionInput
 * @yU-kiki
 */
export const QuestionInput = ({ className }: QuestionInputProps) => {
  const input = "はい / いいえ で答えられる質問";

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
        placeholder={input}
        className={clsx("bg-primary-700", "w-[100%]")}
      />
      <Button variant="secondary">
        <Image
          src="/images/send_white_24dp.svg"
          alt="send"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
};
