import { useState } from "react";
import { useRouter } from "next/router";
import { useLTPuzzleState } from "@/hooks/useLTPuzzle";
import { disabledState } from "@/stores/disabledState";
import { useRecoilState } from "recoil";

export function useSubmitQuestion() {
  const [ltPuzzle, ltPuzzleController] = useLTPuzzleState();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useRecoilState(disabledState);
  const { push } = useRouter();

  const submitQuestion = async () => {
    setDisable(true);
    setLoading(true);
    try {
      await ltPuzzleController.ask(
        ltPuzzle.question,
        ltPuzzle.description,
        ltPuzzle.explanation,
      );
    } catch (e) {
      console.error(e);
      if (e instanceof Error)
        alert("エラー。再実行してください。\n\n理由: " + e.message);
      else alert("エラー。再実行してください。\n\n理由: " + e);
    }
    setDisable(false);
    setLoading(false);
  };

  return { submitQuestion, loading, disabled };
}
