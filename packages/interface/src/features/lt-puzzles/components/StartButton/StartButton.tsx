import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/elements/Button";
import { useLTPuzzleController } from "@/hooks/useLTPuzzle";
import { disabledState } from "@/stores/disabledState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilState } from "recoil";

export type StartButtonProps = {} & BaseProps;

/**
 * StartButton
 * @keit0728
 */
export const StartButton = ({ className }: StartButtonProps) => {
  const ltPuzzleController = useLTPuzzleController();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useRecoilState(disabledState);
  const { push } = useRouter();

  const handleClick = async () => {
    setDisable(true);
    setLoading(true);
    try {
      await ltPuzzleController.start();
    } catch (e) {
      console.error(e);
      alert(
        "問題作成に失敗しました.再度 `GAME START` ボタンを押してください。\n\n理由: " +
          e,
      );
      setDisable(false);
      setLoading(false);
      return;
    }
    push("/page1");
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
      GAME START
    </Button>
  );
};
