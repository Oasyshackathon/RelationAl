import { useRouter } from "next/router";
import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type AnswerButtonProps = {} & BaseProps;

/**
 * AnswerButton
 * @zhihao404🚀🚀🚀
 */
export const AnswerButton = ({ className }: AnswerButtonProps) => {
  const { push } = useRouter();

  const x = 1; // Replace with the actual value of x

  const handleClick = () => {
    if (x === 1) {
      push("/page3");
    } else {
      push("/page4");
    }
  };
  return (
    <Button className={clsx(className)} onClick={handleClick}>
      回答する
    </Button>
  );
};
