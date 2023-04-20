// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/**
 * @title NFTDrop
 * @dev This contract implements a Merkle Proof-based whitelist for an NFT drop
 * and inherits from OpenZeppelin's ERC1155, Ownable, and ERC1155Supply contracts.
 */
contract NFTDrop is ERC1155, Ownable, ERC1155Supply {
    // Merkle root for the whitelist
    bytes32 public merkleRoot;

    // Mapping to track claimed NFTs
    mapping(uint256 => bool) private claimedNFTs;

    /**
     * @dev Constructor that sets the metadata URI and Merkle root for the NFT drop.
     * @param metadataUri The URI for the NFT metadata.
     * @param _merkleRoot The Merkle root for the whitelist.
     */
    constructor(
        string memory metadataUri,
        bytes32 _merkleRoot
    ) ERC1155(metadataUri) {
        merkleRoot = _merkleRoot;
    }

    /**
     * @dev Updates the metadata URI.
     * @param newuri The new URI for the NFT metadata.
     */
    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    /**
     * @dev Updates the Merkle root for the whitelist.
     * @param _merkleRoot The new Merkle root for the whitelist.
     */
    function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
        merkleRoot = _merkleRoot;
    }

    /**
     * @dev Mints an NFT if the sender is in the whitelist and the NFT has not been claimed.
     * @param to The address to receive the minted NFT.
     * @param id The ID of the NFT to be minted.
     * @param proof The Merkle proof for the sender's address.
     */
    function mint(
        address to,
        uint256 id,
        bytes32[] calldata proof
    ) public checkInWhitelist(proof) {
        require(!claimedNFTs[id], "NFT already claimed");
        claimedNFTs[id] = true;
        _mint(to, id, 1, "");
    }

    /**
     * @dev Modifier that checks if the sender is in the whitelist using a Merkle proof.
     * @param proof The Merkle proof for the sender's address.
     */
    modifier checkInWhitelist(bytes32[] calldata proof) {
        bytes32 leaf = keccak256(abi.encode(msg.sender));
        bool verified = MerkleProof.verify(proof, merkleRoot, leaf);
        require(verified, "Not in whitelist");
        _;
    }

    /**
     * @dev Overrides the `_beforeTokenTransfer` function from ERC1155 and ERC1155Supply.
     * @param operator The address performing the token transfer.
     * @param from The address sending the tokens.
     * @param to The address receiving the tokens.
     * @param ids An array of token IDs being transferred.
     * @param amounts An array of the number of tokens being transferred for each respective token ID.
     * @param data Additional data with no specified format.
     */
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
