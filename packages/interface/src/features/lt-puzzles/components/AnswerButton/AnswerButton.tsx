import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/elements/Button";
import { useLTPuzzleState } from "@/hooks/useLTPuzzle";
import { disabledState } from "@/stores/disabledState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilState } from "recoil";

export type AnswerButtonProps = {} & BaseProps;

/**
 * AnswerButton
 * @zhihao404🚀🚀🚀
 */
export const AnswerButton = ({ className }: AnswerButtonProps) => {
  const [ltPuzzle, ltPuzzleController] = useLTPuzzleState();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useRecoilState(disabledState);
  const { push } = useRouter();

  const handleClick = async () => {
    setDisable(true);
    setLoading(true);
    let isAnswer = false;
    try {
      isAnswer = await ltPuzzleController.infer(ltPuzzle.inference, ltPuzzle.explanation);
    } catch (e) {
      console.error(e);
      alert("通信失敗。再実行してください。\n\n理由: " + e);
      setDisable(false);
      setLoading(false);
      return;
    }
    if (isAnswer) push("/page3");
    else push("/page4");
    setDisable(false);
    setLoading(false);
  };

  return (
    <Button
      className={clsx(className)}
      disabled={disabled}
      loading={loading}
      onClick={handleClick}
    >
      回答する
    </Button>
  );
};
