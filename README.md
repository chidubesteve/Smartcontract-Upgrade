
---

# Smart Contract Update Demo

This repository contains a demonstration of various ways to update smart contracts on the blockchain. The provided smart contracts showcase different versions of a `Box` contract, along with scripts to demonstrate manual upgrades.

## Smart Contracts

### Box.sol

Version 1 of the `Box` contract.

- Version: 1
- Functionality: Stores and retrieves an integer value.
- Events: `ValueChanged`


### BoxV2.sol

Version 2 of the `Box` contract.

- Version: 2
- Functionality: Extends the functionality of Version 1 by adding an `increment` function.
- Events: `ValueChanged`


### BoxProxyAdmin.sol

A proxy admin contract for managing upgrades using OpenZeppelin's ProxyAdmin.


## Scripts

### manual-upgrade.js

Demonstrates the manual upgrade process using Hardhat.

## Instructions
1.  Clone this repository: ```   git clone https://github.com/chidubesteve/Smartcontract-Upgrade.git```
2. Navigate into the directory: ```cd Smartcontract-Upgrade```
3. Install dependencies: `npm install`
4. Start a local blockchain: `npx hardhat node`
5. Deploy the contracts: `npx hardhat run scripts/deploy.js --network localhost`
6. Run the manual upgrade script: `npx hardhat run scripts/manual-upgrade.js --network localhost`

---

## Contributing

Feel free to contribute to this project by submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

If your found this repo helpful, don't forget to give it a ⭐ and follow for more 👇

[Twitter](https://twitter.com/chidube_steve)

[LinkedIn](https://www.linkedin.com/in/chidube-anike-7a7721251/)

Made with ❤ from ME!