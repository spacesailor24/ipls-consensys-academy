import Web3 from 'web3';

export function stringToBytes(str) {
    return Web3.utils.hexToBytes(Web3.utils.toHex(str));
}