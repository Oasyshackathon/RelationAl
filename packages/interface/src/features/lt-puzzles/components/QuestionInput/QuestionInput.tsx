import Image from "next/image";
import { Input } from "@/components/elements/Input/Input";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type QuestionInputProps = {} & BaseProps;

/**
 * QuestionInput
 * @yU-kiki
 */
export const QuestionInput = ({ className }: QuestionInputProps) => {
  const input = "Send a message";

  return (
    <div className={clsx(className, "p-[16px]", "rounded-lg")}>
      <Input placeholder={input} className={clsx(className)}></Input>
      <button>
        <Image src="/images/send.svg" alt="send" width={24} height={24} />
      </button>
    </div>
  );
};
