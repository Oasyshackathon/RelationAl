// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol";
import {ERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import {AccessControlEnumerableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {Base64Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/Base64Upgradeable.sol";

import {ILTPuzzle} from "./ILTPuzzle.sol";

contract LTPuzzle is
  Initializable,
  ILTPuzzle,
  ERC721Upgradeable,
  AccessControlEnumerableUpgradeable,
  UUPSUpgradeable
{
  // --------------------------------------------------
  // State
  // --------------------------------------------------

  /// @custom:oz-renamed-from UPGRADER_ROLE
  bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

  /// @custom:oz-renamed-from GAME_ROLE
  bytes32 public constant GAME_ROLE = keccak256("GAME_ROLE");

  /// @custom:oz-renamed-from _externalLink
  string private _externalLink;

  // key -> nonce
  /// @custom:oz-renamed-from _nonceToTokenIdMap
  mapping(uint256 => uint256) private _nonceToTokenIdMap;

  /// @custom:oz-renamed-from _totalSupply
  uint256 private _totalSupply;

  // key -> tokenId
  /// @custom:oz-renamed-from _titleMap
  mapping(uint256 => string) private _titleMap;

  // key -> tokenId
  /// @custom:oz-renamed-from _descriptionMap
  mapping(uint256 => string) private _descriptionMap;

  // key -> tokenId
  /// @custom:oz-renamed-from _explanationMap
  mapping(uint256 => string) private _explanationMap;

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------

  /// @dev Constructor
  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  /// @dev Initialize
  function initialize() public initializer {
    __ERC721_init("LTPuzzle", "LTP");
    __AccessControlEnumerable_init();
    __UUPSUpgradeable_init();

    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(UPGRADER_ROLE, msg.sender);
    _grantRole(GAME_ROLE, msg.sender);
  }

  /// @dev Supports interface
  /// @param interfaceId interface ID
  function supportsInterface(
    bytes4 interfaceId
  )
    public
    view
    override(
      IERC165Upgradeable,
      ERC721Upgradeable,
      AccessControlEnumerableUpgradeable
    )
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

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
  ) external pure returns (bytes4 returnValue) {
    returnValue = this.onERC721Received.selector;
  }

  // --------------------------------------------------
  // Modifier
  // --------------------------------------------------

  /// @dev Only exist token Id
  modifier onlyExist(uint256 tokenId) {
    require(_exists(tokenId), "This token does not exist.");
    _;
  }

  // --------------------------------------------------
  // Getter
  // --------------------------------------------------

  /// @dev Get _totalSupply
  /// @return returnValue _totalSupply
  function getTotalSupply() external view returns (uint256 returnValue) {
    returnValue = _totalSupply;
  }

  /// @dev Get _books
  /// @return returnValue _books
  function getPuzzles()
    external
    view
    returns (ILTPuzzle.Puzzle[] memory returnValue)
  {
    uint256 length = _totalSupply;
    returnValue = new ILTPuzzle.Puzzle[](length);
    for (uint i; i < length; ) {
      returnValue[i] = ILTPuzzle.Puzzle(
        _titleMap[i],
        _descriptionMap[i],
        _explanationMap[i]
      );
      unchecked {
        ++i;
      }
    }
  }

  /// @dev Get _nonceToTokenIdMap
  /// @param nonce nonce
  /// @return returnValue _nonceToTokenIdMap
  function getNonceToTokenID(
    uint256 nonce
  ) external view returns (uint256 returnValue) {
    returnValue = _nonceToTokenIdMap[nonce];
  }

  /// @dev Get external link
  /// @return returnValue external link
  function getExternalLink() external view returns (string memory returnValue) {
    returnValue = _externalLink;
  }

  // --------------------------------------------------
  // Setter
  // --------------------------------------------------

  /// @dev Set external link
  /// @param newValue new value
  function setExternalLink(
    string memory newValue
  ) external onlyRole(DEFAULT_ADMIN_ROLE) {
    string memory oldValue = _externalLink;
    _externalLink = newValue;
    emit SetExternalLink(_msgSender(), oldValue, newValue);
  }

  // --------------------------------------------------
  // Main Logic
  // --------------------------------------------------

  /// @dev generatePuzzle
  /// @param nonce nonce
  /// @param puzzle puzzle
  function generatePuzzle(
    uint256 nonce,
    ILTPuzzle.Puzzle memory puzzle
  ) external onlyRole(GAME_ROLE) {
    require(_nonceToTokenIdMap[nonce] == 0, "LTPuzzle: nonce is already used");
    uint256 newTokenId = _totalSupply;
    _nonceToTokenIdMap[nonce] = newTokenId;
    _titleMap[newTokenId] = puzzle.title;
    _descriptionMap[newTokenId] = puzzle.description;
    _explanationMap[newTokenId] = puzzle.explanation;
    _safeMint(address(this), newTokenId);
    _totalSupply++;
  }

  /// @dev mint
  /// @param tokenId token ID
  function mint(uint256 tokenId) external {
    require(tokenId != 0, "LTPuzzle: Invalid tokenId");
    require(ownerOf(tokenId) == address(this), "LTPuzzle: Already minted");
    _safeTransfer(address(this), msg.sender, tokenId, "");
  }

  /// @dev Get contract URI
  /// @return cURI contract URI
  function contractURI() external view returns (string memory cURI) {
    string memory name = name();
    string memory json = Base64Upgradeable.encode(
      bytes(
        string(
          abi.encodePacked(
            '{"name": "',
            name,
            '", "description": "',
            name,
            ' is a Lateral Thinking Puzzle.", "image": "',
            _getImage(name),
            '", "external_link": "',
            _externalLink,
            '"}'
          )
        )
      )
    );
    string memory finalTokenUri = string(
      abi.encodePacked("data:application/json;base64,", json)
    );
    cURI = finalTokenUri;
  }

  /// @dev Get token URI
  /// @param tokenId token ID
  /// @return uri token URI
  function tokenURI(
    uint256 tokenId
  ) public view override onlyExist(tokenId) returns (string memory uri) {
    string memory title = _titleMap[tokenId];
    string memory json = Base64Upgradeable.encode(
      bytes(
        string(
          abi.encodePacked(
            '{"name": "',
            title,
            '", "description": "',
            _descriptionMap[tokenId],
            '", "image": "',
            _getImage(title),
            '", "external_link": "',
            _externalLink,
            '", "attributes": [{"trait_type": "explanation", "value": "',
            _explanationMap[tokenId],
            '"}]}'
          )
        )
      )
    );
    string memory finalTokenUri = string(
      abi.encodePacked("data:application/json;base64,", json)
    );
    uri = finalTokenUri;
  }

  // --------------------------------------------------
  // Internal
  // --------------------------------------------------

  /// @dev Get image
  /// @param title title
  function _getImage(
    string memory title
  ) private pure returns (string memory svg) {
    svg = string.concat(
      "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>",
      title,
      "</text></svg>"
    );
    svg = string.concat(
      "data:image/svg+xml;base64,",
      Base64Upgradeable.encode(bytes(svg))
    );
  }

  /// @dev Authorize upgrade
  /// @param newImplementation new implementation address
  function _authorizeUpgrade(
    address newImplementation
  ) internal override onlyRole(UPGRADER_ROLE) {}
}
