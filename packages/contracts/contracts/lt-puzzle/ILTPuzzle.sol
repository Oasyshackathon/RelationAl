// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";

/// @title ILTPuzzle
/// @author keit (@keitEngineer)
/// @dev This is an interface of LTPuzzle.
interface ILTPuzzle is IERC721Upgradeable {
  // --------------------------------------------------
  // Struct
  // --------------------------------------------------

  struct Puzzle {
    string title;
    string description;
    string explanation;
  }

  // --------------------------------------------------
  // Event
  // --------------------------------------------------

  event SetExternalLink(
    address indexed publisher,
    string oldValue,
    string newValue
  );

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------

  /// @dev Initialize
  function initialize() external;

  /// @dev Supports interface
  /// @param operator operator
  /// @param from from
  /// @param tokenId token ID
  /// @param data data
  /// @return returnValue return value
  function onERC721Received(
    address operator,
    address from,
    uint256 tokenId,
    bytes calldata data
  ) external pure returns (bytes4 returnValue);

  // --------------------------------------------------
  // Getter
  // --------------------------------------------------

  /// @dev Get _totalSupply
  /// @return returnValue _totalSupply
  function getTotalSupply() external view returns (uint256 returnValue);

  /// @dev Get _books
  /// @return returnValue _books
  function getPuzzles()
    external
    view
    returns (ILTPuzzle.Puzzle[] memory returnValue);

  /// @dev Get _nonceToTokenId
  /// @param nonce nonce
  /// @return returnValue _nonceToTokenId
  function getNonceToTokenID(
    uint256 nonce
  ) external view returns (uint256 returnValue);

  /// @dev Get external link
  /// @return returnValue external link
  function getExternalLink() external view returns (string memory returnValue);

  // --------------------------------------------------
  // Setter
  // --------------------------------------------------

  /// @dev Set external link
  /// @param newValue new value
  function setExternalLink(string memory newValue) external;

  // --------------------------------------------------
  // Main Logic
  // --------------------------------------------------

  /// @dev generatePuzzle
  /// @param nonce nonce
  /// @param puzzle puzzle
  function generatePuzzle(uint256 nonce, Puzzle memory puzzle) external;

  /// @dev mint
  /// @param tokenId token ID
  function mint(uint256 tokenId) external;

  /// @dev Get contract URI
  /// @return cURI contract URI
  function contractURI() external view returns (string memory cURI);
}
