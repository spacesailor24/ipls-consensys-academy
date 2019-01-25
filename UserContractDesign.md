# User Smart Contract

- Upon initialization, a user will set their username
- A user will be able to update their username, but this will be a transaction that requires ETH
    - There should be a setter function on the user's smart contract
- Users are identified by their smart contract address (because this should never change and is unique to each user)
    - The smart contract's fallback function will return the user's username
    - The smart contract should also have a getter for the user's username
- User's SC will maintain a mapping of SC addresses they've connected with
