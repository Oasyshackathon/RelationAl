import { Button } from "@/components/elements/Button";
import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type SolvedButtonProps = {} & BaseProps;

/**
 * SolvedButton
 * @yU-kiki
 */
export const SolvedButton = ({ className }: SolvedButtonProps) => {
  //TODO: ボタン押したらページ2に遷移

  return <Button className={clsx(className)}>謎は解けましたか？</Button>;
};
