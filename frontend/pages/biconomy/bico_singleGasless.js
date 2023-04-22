import { ethers } from "ethers";

import { smartAccount } from "./bico_smartAccount";

// This file contains the function for Single Gasless Transaction

// Gasless Function for Buying Ticket
export async function buyTicket(address, ticketTypeId, amount, contractAddress) {

    const buyTicketInterface = ethers.utils.Interface([
        'function buyTicket(address to,uint256 ticketTypeId,uint256 amount)'
    ]);

    const encodedData = buyTicketInterface.encodeFunctionData('buyTicket', [address, ticketTypeId, amount]);

    const tx = {
        to: contractAddress,
        data: encodedData,
    };

    // Sending gasless transaction
    const txResponse = await smartAccount.sendTransaction({ transaction: tx });
    console.log('userOp hash', txResponse.hash);

    // Event listener that gets triggered once a hash is generetaed
    smartAccount.on('txHashGenerated', (response) => {
        console.log('txHashGenerated event received via emitter', response);
    });
    smartAccount.on('onHashChanged', (response) => {
        console.log('onHashChanged event received via emitter', response);
    });
    // Event listener that gets triggered once a transaction is mined
    smartAccount.on('txMined', (response) => {
        console.log('txMined event received via emitter', response);
    });
    // Event listener that gets triggered on any error
    smartAccount.on('error', (response) => {
        console.log('error event received via emitter', response);
        return false;
    });

    const txReciept = await txResponse.wait().then((receipt) => {
        return true;
    });
    console.log('Tx hash for Buy Ticket', txReciept.transactionHash);

}

// Gasless function for creating ticket
export async function createTicket(metadataURI, price, supply, contractAddress) {

    const createTicketInterface = ethers.utils.Interface(['function createTicket(string memory metadataURI,uint256 price,uint256 supply)']);

    const encodedData = createTicketInterface.encodeFunctionData('createTicket', [metadataURI, price, supply]);

    const tx = {
        to: contractAddress,
        data: encodedData,
    };

    // Sending gasless transaction
    const txResponse = await smartAccount.sendTransaction({ transaction: tx });
    console.log('userOp hash', txResponse.hash);

    // Event listener that gets triggered once a hash is generetaed
    smartAccount.on('txHashGenerated', (response) => {
        console.log('txHashGenerated event received via emitter', response);
    });
    smartAccount.on('onHashChanged', (response) => {
        console.log('onHashChanged event received via emitter', response);
    });
    // Event listener that gets triggered once a transaction is mined
    smartAccount.on('txMined', (response) => {
        console.log('txMined event received via emitter', response);
    });
    // Event listener that gets triggered on any error
    smartAccount.on('error', (response) => {
        console.log('error event received via emitter', response);
        return false;
    });

    const txReciept = await txResponse.wait().then((receipt) => {
        return true;
    });
    console.log('Tx hash for Create Ticket', txReciept.transactionHash);

}

// Gasless function for creating NFT Drop
export async function createNFTDrop(name, symbol, metadataURI, merkleRoot, contractAddress) {
    const createNFTDropInterface = ethers.utils.Interface(['function createNFTDrop(string memory name,string memory symbol,string memory metadataURI,string memory merkleRoot)']);

    const encodedData = createNFTDropInterface.encodeFunctionData('createNFTDrop', [name, symbol, metadataURI, merkleRoot]);

    const tx = {
        to: contractAddress,
        data: encodedData,
    };

    // Sending gasless transaction
    const txResponse = await smartAccount.sendTransaction({ transaction: tx });

    // Event listener that gets triggered once a hash is generetaed
    smartAccount.on('txHashGenerated', (response) => {
        console.log('txHashGenerated event received via emitter', response);
    });
    smartAccount.on('onHashChanged', (response) => {
        console.log('onHashChanged event received via emitter', response);
    });
    // Event listener that gets triggered once a transaction is mined
    smartAccount.on('txMined', (response) => {
        console.log('txMined event received via emitter', response);
    });
    // Event listener that gets triggered on any error
    smartAccount.on('error', (response) => {
        console.log('error event received via emitter', response);
        return false;
    });

    const txReciept = await txResponse.wait().then((receipt) => {
        return true;
    });
    console.log('Tx hash for Create NFTDrop', txReciept.transactionHash);
}

// Gasless function for updating NFT Drop Metadata URI
export async function updateMetadataURI(nftDropAddress, metadataURI, contractAddress) {
    const updateMetadataURIInterface = ethers.utils.Interface(['function updateMetadataURI(address nftDropAddress,string memory metadataURI)']);

    const encodedData = updateMetadataURIInterface.encodeFunctionData('updateMetadataURI', [nftDropAddress, metadataURI]);

    const tx = {
        to: contractAddress,
        data: encodedData,
    };

    // Sending gasless transaction
    const txResponse = await smartAccount.sendTransaction({ transaction: tx });

    // Event listener that gets triggered once a hash is generetaed
    smartAccount.on('txHashGenerated', (response) => {
        console.log('txHashGenerated event received via emitter', response);
    });
    smartAccount.on('onHashChanged', (response) => {
        console.log('onHashChanged event received via emitter', response);
    });
    // Event listener that gets triggered once a transaction is mined
    smartAccount.on('txMined', (response) => {
        console.log('txMined event received via emitter', response);
    });
    // Event listener that gets triggered on any error
    smartAccount.on('error', (response) => {
        console.log('error event received via emitter', response);
        return false;
    });

    const txReciept = await txResponse.wait().then((receipt) => {
        return true;
    });
    console.log('Tx hash for Updating the Metadata URI', txReciept.transactionHash);
}

// Gasless function for updating NFT Drop Merkle Root
export async function updateMerkleRoot(nftDropAddress, merkleRoot, contractAddress) {
    const updateMerkleRootInterface = ethers.utils.Interface(['function updateMerkleRoot(address nftDropAddress,bytes32 merkleRoot)']);

    const encodedData = updateMerkleRootInterface.encodeFunctionData('updateMerkleRoot', [nftDropAddress, merkleRoot]);

    const tx = {
        to: contractAddress,
        data: encodedData,
    };

    // Sending gasless transaction
    const txResponse = await smartAccount.sendTransaction({ transaction: tx });

    // Event listener that gets triggered once a hash is generetaed
    smartAccount.on('txHashGenerated', (response) => {
        console.log('txHashGenerated event received via emitter', response);
    });
    smartAccount.on('onHashChanged', (response) => {
        console.log('onHashChanged event received via emitter', response);
    });
    // Event listener that gets triggered once a transaction is mined
    smartAccount.on('txMined', (response) => {
        console.log('txMined event received via emitter', response);
    });
    // Event listener that gets triggered on any error
    smartAccount.on('error', (response) => {
        console.log('error event received via emitter', response);
        return false;
    });

    const txReciept = await txResponse.wait().then((receipt) => {
        return true;
    });
    console.log('Tx hash for Updating the Merkle Root', txReciept.transactionHash);
}

// Gasless function for claiming NFT
export async function claimNFT(to, id, proof, contractAddress) {
    const mint = ethers.utils.Interface(['function mint(address to,uint256 id,bytes32[] calldata proof)']);

    const encodedData = mint.encodeFunctionData('mint', [to, id, proof]);

    const tx = {
        to: contractAddress,
        data: encodedData,
    };

    // Sending gasless transaction
    const txResponse = await smartAccount.sendTransaction({ transaction: tx });

    // Event listener that gets triggered once a hash is generetaed
    smartAccount.on('txHashGenerated', (response) => {
        console.log('txHashGenerated event received via emitter', response);
    });
    smartAccount.on('onHashChanged', (response) => {
        console.log('onHashChanged event received via emitter', response);
    });
    // Event listener that gets triggered once a transaction is mined
    smartAccount.on('txMined', (response) => {
        console.log('txMined event received via emitter', response);
    });
    // Event listener that gets triggered on any error
    smartAccount.on('error', (response) => {
        console.log('error event received via emitter', response);
        return false;
    });

    const txReciept = await txResponse.wait().then((receipt) => {
        return true;
    });
    console.log('Tx hash for Claiming NFT', txReciept.transactionHash);
}