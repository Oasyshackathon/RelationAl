import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { deployLTPuzzle } from "../helpers/deploy/deployLTPuzzle";
import { postDeployLTPuzzle } from "../helpers/post-deploy/postDeployLTPuzzle";

describe("LTPuzzle", function () {
  async function init() {
    const { ltPuzzle } = await loadFixture(deployLTPuzzle);
    await postDeployLTPuzzle(ltPuzzle);
    return {
      ltPuzzle,
    };
  }

  describe("Deployment", function () {
    it("deploy", async function () {
      const { ltPuzzle } = await loadFixture(init);
      expect(ltPuzzle.address).to.not.equal(
        ethers.constants.AddressZero,
        "zero address"
      );
    });
  });

  describe("Main Logic", function () {
    // TODO: Main Logic のテストコードを書く
  });
});
