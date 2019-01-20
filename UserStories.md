# User Stories

## Table of Contents

- [Terms to Know](#terms-to-know)
    - [Public User Repository](#public-user-repository)
    - [Identifying Information](#identifying-information)
    - [Connection Request](#connection-request)
- [Bob Sends Alice a Connection Requestb](#bob-aends-alice-a-connection-request)
- [Alice Approves Bob's Connection Request](#alice-approves-bobs-connection-request)
- [Alice and Bob Exchange Identifying Information](#alice-and-bob-exchange-identifying-information)

## Terms to Know

### Public User Repository

The Public User Repository is a searchable collection of users whom elected to make their profile (or at least some Identifying Information) public.

Using the Public User Repository, users can search and submit connection requests to other users.

If a user has set their profile to _private_, then they will **not** show up in the Public User Repository.

### Identifying Information

Identifying information can be (but is not limited to):

- Username
- Public addresses (support for multiple cryptocurrencies)
- First and/or Last name
- Email Address
- Phone Number
- Address
- Github

### Connection Request

A request made to share [Identifying Information](#identifying-information) between two users using the IPCS dApp.

Both sides of a Connection Request will allow a user to select what [Identifying Information](#identifying-information) they would like to share with the other party.

A user can decided to share no additional information, and can also configure what information is shared with a user at any given time.

---

## Bob Sends Alice a Connection Request

### Preface

Alice and Bob are not currently connected within the IPCS dApp.

### User Story

Alice wants to connect with Bob using IPCS.

Connection between Alice and Bob can be made by:

- Scanning QR code generated within Bob's profile page
- If Bob's profile has been made publicly viewable, Alice can search for Bob in IPCS' [Public User Repository](#public-user-repository) using [Identifying Information](#identifying-information)

After Bob uses one of the methods above, a [Connection Request](#connection-request) is sent to Alice for her approval or denial.

### Requirements

- Alice and Bob both have to have to be registered within IPCS

## Alice Approves Bob's Connection Request

### Preface

Alice has just approved Bob's [Connection Request](#connection-request) and they are connecting for the first time.

### User Story

After Alice approves Bob's [Connection Request](#connection-request), a list of [Identifying Information](#identifying-information) that Alice has added to her profile will show up and she will select what [Identifying Information](#identifying-information) she would like to share with Bob.

Upon Alice's acceptance of Bob's [Connection Request](#connection-request), Bob will also see a list of [Identifying Information](#identifying-information) he has added to his profile and will be able to select what [Identifying Information](#identifying-information) he would like to share with Alice.

### Requirements

- Alice and Bob will have to have [Identifying Information](#identifying-information) registered with their respective accounts

## Alice and Bob Exchange Identifying Information

### Preface

Alice has accepted Bob's [Connection Request](#connection-request) and both Alice and Bob have selected what [Identifying Information](#identifying-information) they would like to share with each other.

### User Story

After selecting what [Identifying Information](#identifying-information) Alice would like to share with Bob, the selected [Identifying Information](#identifying-information) is sent to Bob for him to store.

The same occurs for Bob - Bob's selected [Identifying Information](#identifying-information) will be sent to Alice for to store.

### Notes

- Storage of a connection's [Identifying Information](#identifying-information) should be configurable to be either cloud based or locally (like how uPort stores data locally)
