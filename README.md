<div align="center">
      <h1> <img src="https://www.thewindowsclub.com/wp-content/uploads/2021/03/Etherium.png" width="500px"><br/>NFT Marketplace</h1>
     </div>

# Description
NFT Marketplace template for creation, sale, and purchase of digital art as NFTs.


# Tech Used
![Solidity](https://img.shields.io/badge/Solidity-%2320232a.svg?style=for-the-badge&logo=&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![JavaScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Live Preview
[Demo](https://nft-marketplace.duanhc.dev/)


## Setup file .env

```dotenv
# config deploy testnet 
DEPLOY_KEY_RINKEBY=""
DEPLOY_ACC_RINKEBY=""
# use local network
NETWORK=1337
CONTRACT_ADDRESS=""
```

## Build local network
```bash
# start hardhat
$ npx hardhat node

# deploy smart contract to local network
$ npx hardhat run scripts/deploy.js --network localhost
```

## Build Setup

``` bash
# clone project
$ git clone https://github.com/tuliba1996/nft-app-marketplace.git

# install dependencies
$ yarn install

# serve with host at localhost:3000
$ yarn dev
```



### Task
- [x] Home page
- [x] Detail NFT page
- [x] My NFT page
- [x] Mint NFT page
- [x] My NFT Listed page
- [x] Connect Metamask

 
