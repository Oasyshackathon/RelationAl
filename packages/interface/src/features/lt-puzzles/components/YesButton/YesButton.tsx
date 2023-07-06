import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/elements/Button";
import { useLTPuzzleState } from "@/hooks/useLTPuzzle";
import { disabledState } from "@/stores/disabledState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilState } from "recoil";

export type YesButtonProps = {} & BaseProps;

/**
 * YesButton
 * @keit0728
 */
export const YesButton = ({ className }: YesButtonProps) => {
  //TODO: #21 ボタン押したらミント処理
  const [ltPuzzle, ltPuzzleController] = useLTPuzzleState();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useRecoilState(disabledState);
  const { push } = useRouter();

  const handleClick = async () => {
    setDisable(true);
    setLoading(true);
    try {
      await ltPuzzleController.mint(ltPuzzle.tokenId);
    } catch (e) {
      console.error(e);
      alert("ミントに失敗しました.再度実行してください。\n\n理由: " + e);
      setDisable(false);
      setLoading(false);
      return;
    }
    push("/page5");
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
      はい
    </Button>
  );
};
