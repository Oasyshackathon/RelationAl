// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol";
import {ERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import {AccessControlEnumerableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import {ILTPuzzle} from "./ILTPuzzle.sol";

contract LTPuzzle is
    Initializable,
    ILTPuzzle,
    ERC721Upgradeable,
    AccessControlEnumerableUpgradeable,
    UUPSUpgradeable
{
    // --------------------------------------------------------------------------------
    // State
    // --------------------------------------------------------------------------------

    /// @custom:oz-renamed-from UPGRADER_ROLE
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    /// @custom:oz-renamed-from GAME_ROLE
    bytes32 public constant GAME_ROLE = keccak256("GAME_ROLE");

    // --------------------------------------------------------------------------------
    // Initialize
    // --------------------------------------------------------------------------------

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

    // --------------------------------------------------------------------------------
    // Modifier
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // Getter
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // Setter
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // Main Logic
    // --------------------------------------------------------------------------------

    /// @dev safeMint
    /// @param to to
    /// @param tokenId token ID
    function safeMint(
        address to,
        uint256 tokenId
    ) public onlyRole(GAME_ROLE) {
        _safeMint(to, tokenId);
    }

    // --------------------------------------------------------------------------------
    // Internal
    // --------------------------------------------------------------------------------

    /// @dev Authorize upgrade
    /// @param newImplementation new implementation address
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(UPGRADER_ROLE) {}
}
