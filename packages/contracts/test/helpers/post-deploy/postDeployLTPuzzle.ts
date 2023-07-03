import { LTPuzzle } from "../../../typechain-types";

export async function postDeployLTPuzzle(ltPuzzle: LTPuzzle) {
  return {
    ltPuzzle,
  };
}
