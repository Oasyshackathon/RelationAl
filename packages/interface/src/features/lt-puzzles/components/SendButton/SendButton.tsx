import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/elements/Button";
import { useLTPuzzleState } from "@/hooks/useLTPuzzle";
import { disabledState } from "@/stores/disabledState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilState } from "recoil";

export type SendButtonProps = {} & BaseProps;

/**
 * SendButton
 * @keit0728
 */
export const SendButton = ({ className }: SendButtonProps) => {
  const [ltPuzzle, ltPuzzleController] = useLTPuzzleState();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useRecoilState(disabledState);
  const { push } = useRouter();

  const handleClick = async () => {
    setDisable(true);
    setLoading(true);
    try {
      await ltPuzzleController.ask(ltPuzzle.question, ltPuzzle.description, ltPuzzle.explanation);
    } catch (e) {
      console.error(e);
      if (e instanceof Error)
        alert("エラー。再実行してください。\n\n理由: " + e.message);
      else alert("エラー。再実行してください。\n\n理由: " + e);
    }
    setDisable(false);
    setLoading(false);
  };

  return (
    <Button
      variant="secondary"
      className={clsx(className)}
      disabled={disabled}
      loading={loading}
      onClick={handleClick}
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
