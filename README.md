# NOTICE:
## On truffle-config.js
Port of ganache is: 7545
solc.version: "0.5.1", // If you don't downgrade this, the compile always gets error

## On your smartcontract.sol
pragma solidity >= 0.4.22 < 0.9.0; // If you don't downgrade the version to .4.22, the compile always gets error
Because we use the version which is before .5.0, so contructor() always require visibility after it

## Truffle syntax has been updated with the lectures
You can't migrate in develop environment
Migrate seperately
Truffle develop: to get into develop environment
Then hit "test" to test your smartcontract by the .js test file in test folder
