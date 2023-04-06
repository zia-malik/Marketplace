// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // const NFT = await hre.ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy("NFTCollection", "NFT");

  // await nft.deployed();

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(5);

  await marketplace.deployed();

  // console.log(
  //   `NFT contract Deployed to ${nft.address}`
  // );

  console.log(
    `Marketplace contract Deployed to ${marketplace.address}`
  );
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// NFT deployed to : 0x557f2fA98Fde1B632868FCF3e9c232Cb2d024d01

// Marketplace deployed to: 0x4a15b606955174A7cd8Baa6C258cd0cCDbc579c6