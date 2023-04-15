// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/// @title EventTicket
/// @dev A contract for creating and buying ERC1155 NFT tickets for events
contract EventTicket is ERC1155 {
    uint256 private _ticketTypeId;

    /// @dev A struct to represent the properties of a ticket type
    struct TicketType {
        address creator;
        string metadataURI;
        uint256 price;
        uint256 supply;
    }

    /// @dev Mapping to store ticket type details using ticketTypeId as key
    mapping(uint256 => TicketType) public ticketTypes;

    /// @dev Events to be emitted on specific contract actions
    event TicketTypeCreated(
        uint256 indexed ticketTypeId,
        address indexed creator,
        string metadataURI,
        uint256 price,
        uint256 supply
    );
    event TicketPurchased(
        address indexed buyer,
        address indexed recipient,
        uint256 indexed ticketTypeId,
        uint256 amount
    );

    /// @notice Initializes the contract
    constructor() ERC1155("") {}

    /// @notice Creates a new ERC1155 NFT ticket type
    /// @dev Increments _ticketTypeId and adds the ticket type to ticketTypes mapping
    /// @param metadataURI The URI for the new ticket type's metadata
    /// @param price The price of the new ticket type (in wei)
    /// @param supply The total supply of the new ticket type
    function createTicketType(
        string memory metadataURI,
        uint256 price,
        uint256 supply
    ) external {
        _ticketTypeId += 1;
        ticketTypes[_ticketTypeId] = TicketType(
            msg.sender,
            metadataURI,
            price,
            supply
        );
        _mint(msg.sender, _ticketTypeId, supply, "");
        emit TicketTypeCreated(
            _ticketTypeId,
            msg.sender,
            metadataURI,
            price,
            supply
        );
    }

    /// @notice Buys a specific ticket type by ticketTypeId
    /// @dev The transaction value should be at least the totalPrice of the tickets
    /// @param to The address that will receive the purchased tickets
    /// @param ticketTypeId The ID of the ticket type to be purchased
    /// @param amount The number of tickets to be purchased
    function buyTicket(
        address to,
        uint256 ticketTypeId,
        uint256 amount
    ) external payable {
        TicketType storage ticketType = ticketTypes[ticketTypeId];
        require(ticketType.supply > 0, "Ticket type not found");
        require(
            balanceOf(msg.sender, ticketTypeId) >= amount,
            "Not enough tickets available"
        );

        uint256 totalPrice = ticketType.price * amount;
        require(
            msg.value >= totalPrice,
            "Not enough ETH sent for the transaction"
        );

        address ticketCreator = ticketType.creator;
        payable(ticketCreator).transfer(msg.value);

        safeTransferFrom(ticketCreator, to, ticketTypeId, amount, "");
        emit TicketPurchased(msg.sender, to, ticketTypeId, amount);
    }

    /// @notice Returns the metadata URI of a specific ticket type
    /// @param ticketTypeId The ID of the ticket type
    /// @return The metadata URI of the ticket type
    function uri(
        uint256 ticketTypeId
    ) public view override returns (string memory) {
        require(ticketTypes[ticketTypeId].supply > 0, "Ticket type not found");
        return ticketTypes[ticketTypeId].metadataURI;
    }

    /// @notice Get the details of a specific ticket type
    /// @param ticketTypeId The ID of the ticket type
    /// @return A tuple containing the ticket type details (creator, metadataURI,
    function getTicketTypeDetails(
        uint256 ticketTypeId
    ) external view returns (address, string memory, uint256, uint256) {
        TicketType storage ticketType = ticketTypes[ticketTypeId];
        require(ticketType.supply > 0, "Ticket type not found");
        return (
            ticketType.creator,
            ticketType.metadataURI,
            ticketType.price,
            ticketType.supply
        );
    }
}
