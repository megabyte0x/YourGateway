import { ethers } from "ethers";

import smartAccount from "./bico_SmartAccount";

// This file contains the function for Single Gasless Transaction

// Gasless Function for Buying Ticket
export async function buyTicket(address, ticketTypeId, amount) {

    const buyTicketInterface = ethers.utils.Interface([
        'function buyTicket(address to,uint256 ticketTypeId,uint256 amount)'
    ]);

    const encodedData = buyTicketInterface.encodeFunctionData('buyTicket', [address, ticketTypeId, amount]);

    const tx = {
        to: '<Contract Address>',
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

export async function createTicket(metadataURI, price, supply) {

    const createTicketInterface = ethers.utils.Interface(['function createTicket(string memory metadataURI,uint256 price,uint256 supply)']);

    const encodedData = createTicketInterface.encodeFunctionData('createTicket', [metadataURI, price, supply]);

    const tx = {
        to: '<Contract Address>',
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