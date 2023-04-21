// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "./NFTDrop.sol";

/**
 * @title NFTDrop
 * @dev This is a facotry contract for creating NFTDrop contracts.
 */
contract NFTDropFactory {
    // Mapping from NFTDrop contract address to its metadata
    mapping(address => NFTDropMetadata) public nftDrops;

    // Array of all NFTDrop contract addresses
    address[] public nftDropAddresses;

    // Struct for storing NFTDrop contract metadata
    struct NFTDropMetadata {
        address creator;
        string name;
        string symbol;
        string metadataURI;
        bytes32 merkleRoot;
    }

    // Event emitted when a new NFTDrop contract is created
    event NFTDropCreated(
        address indexed creator,
        address indexed nftDropAddress,
        string name,
        string symbol,
        string metadataURI,
        bytes32 merkleRoot
    );

    /**
     * @dev Creates a new NFTDrop contract with the provided metadata.
     * @param name The name of the NFTDrop contract.
     * @param symbol The symbol of the NFTDrop contract.
     * @param metadataURI The URI for the NFT metadata.
     * @param merkleRoot The Merkle root for the whitelist.
     */
    function createNFTDrop(
        string memory name,
        string memory symbol,
        string memory metadataURI,
        bytes32 merkleRoot
    ) external {
        NFTDrop nftDrop = new NFTDrop(metadataURI, merkleRoot);
        nftDrops[address(nftDrop)] = NFTDropMetadata({
            creator: msg.sender,
            name: name,
            symbol: symbol,
            metadataURI: metadataURI,
            merkleRoot: merkleRoot
        });
        nftDropAddresses.push(address(nftDrop));

        emit NFTDropCreated(
            msg.sender,
            address(nftDrop),
            name,
            symbol,
            metadataURI,
            merkleRoot
        );
    }

    /**
     * @dev Updates the metadata URI for an NFTDrop contract.
     * @param nftDropAddress The address of the NFTDrop contract.
     * @param metadataURI The new URI for the NFT metadata.
     */
    function updateMetadataURI(
        address nftDropAddress,
        string memory metadataURI
    ) external {
        require(
            nftDrops[nftDropAddress].creator == msg.sender,
            "Only the creator can update the metadata URI"
        );

        NFTDrop nftDropContract = NFTDrop(nftDropAddress);
        nftDropContract.setURI(metadataURI);

        NFTDropMetadata storage nftDrop = nftDrops[nftDropAddress];
        nftDrop.metadataURI = metadataURI;
    }

    /**
     * @dev Updates the Merkle root for an NFTDrop contract.
     * @param nftDropAddress The address of the NFTDrop contract.
     * @param merkleRoot The new Merkle root for the whitelist.
     */
    function updateMerkleRoot(
        address nftDropAddress,
        bytes32 merkleRoot
    ) external {
        require(
            nftDrops[nftDropAddress].creator == msg.sender,
            "Only the creator can update the Merkle root"
        );

        NFTDrop nftDropContract = NFTDrop(nftDropAddress);
        nftDropContract.setMerkleRoot(merkleRoot);

        NFTDropMetadata storage nftDrop = nftDrops[nftDropAddress];
        nftDrop.merkleRoot = merkleRoot;
    }

    /**
     * @dev Returns the details of a particular NFTDrop contract.
     * @param nftDropAddress The address of the NFTDrop contract.
     * @return creator The creator of the NFTDrop contract.
     * @return name The name of the NFTDrop contract.
     * @return symbol The symbol of the NFTDrop contract.
     * @return metadataURI The URI for the NFT metadata.
     * @return merkleRoot The Merkle root for the whitelist.
     */
    function getNFTDropDetails(
        address nftDropAddress
    )
        external
        view
        returns (
            address creator,
            string memory name,
            string memory symbol,
            string memory metadataURI,
            bytes32 merkleRoot
        )
    {
        NFTDropMetadata storage nftDrop = nftDrops[nftDropAddress];
        return (
            nftDrop.creator,
            nftDrop.name,
            nftDrop.symbol,
            nftDrop.metadataURI,
            nftDrop.merkleRoot
        );
    }

    /**
     * @dev Returns the total number of NFTDrop contracts created by the factory.
     * @return The total number of NFTDrop contracts.
     */
    function getNFTDropCount() external view returns (uint256) {
        return nftDropAddresses.length;
    }
}
