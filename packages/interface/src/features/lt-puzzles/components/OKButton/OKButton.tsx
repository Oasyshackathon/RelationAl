import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/elements/Button";
import { useLTPuzzleController } from "@/hooks/useLTPuzzle";
import { disabledState } from "@/stores/disabledState";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";
import { useRecoilState } from "recoil";

export type OKButtonProps = {} & BaseProps;

/**
 * OKButton
 * @keit0728
 */
export const OKButton = ({ className }: OKButtonProps) => {
  const ltPuzzleController = useLTPuzzleController();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useRecoilState(disabledState);
  const { push } = useRouter();

  const handleClick = () => {
    setDisable(true);
    setLoading(true);
    push("/");
    ltPuzzleController.reset();
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
      OK
    </Button>
  );
};
