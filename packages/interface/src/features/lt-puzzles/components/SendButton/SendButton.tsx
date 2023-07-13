import Image from "next/image";
import { Button } from "@/components/elements/Button";
import { useSubmitQuestion } from "@/hooks/useSubmitQuestion";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type SendButtonProps = {} & BaseProps;

/**
 * SendButton
 * @keit0728
 */
export const SendButton = ({ className }: SendButtonProps) => {
  const { submitQuestion, loading, disabled } = useSubmitQuestion();

  return (
    <Button
      variant="secondary"
      className={clsx(className)}
      disabled={disabled}
      loading={loading}
      onClick={submitQuestion}
    >
      <Image
        src="/images/send_white_24dp.svg"
        alt="send"
        width={24}
        height={24}
      />
    </Button>
  );
};
