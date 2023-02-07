const { ethers } = require("hardhat");

async function main() {
    const [user] = await ethers.getSigners();

    console.log("Deploying from :", user.address);

    // We get the contract to deploy
    // 0x22c095c69c38b66afAad4eFd4280D94Ec9D12f4C is the Locksmith purchaser on Unlock's side.
    const secretSigner = "0x22c095c69c38b66afAad4eFd4280D94Ec9D12f4C"

    const PurchaseHook = await ethers.getContractFactory("PurchaseHook");
    const hook = await PurchaseHook.deploy(secretSigner);

    await hook.deployed();

    console.log("Hook deployed to:", hook.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });