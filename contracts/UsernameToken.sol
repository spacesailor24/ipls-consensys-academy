pragma solidity ^0.5.3;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract UsernameToken is ERC721Full {

    struct RegisteredUser {
        bytes username;
        bytes did;
        uint256[] connections;
    }

    mapping (uint256 => RegisteredUser) public RegisteredUsers;

    constructor() ERC721Full("UsernameToken", "UNT") public {}

    function isUsernameTaken(bytes memory username) public view returns(bool) {
        return _exists(usernameToTokenId(username));
    }

    function usernameToTokenId(bytes memory username) public pure returns(uint256) {
        return uint256(keccak256(username));
    }

    function usernameToDid(bytes memory username) public view returns(bytes memory) {
        return RegisteredUsers[usernameToTokenId(username)].did;
    }

    function registerUsername(bytes memory username, bytes memory did) public returns(bool) {
        uint256 _userId = usernameToTokenId(username);
        require(!_exists(_userId), "Username is already taken");
        RegisteredUser memory _registeredUser = RegisteredUser(username, did, new uint256[](0));
        RegisteredUsers[_userId] = _registeredUser;
        _mint(msg.sender, _userId);
        return true;
    }
}
