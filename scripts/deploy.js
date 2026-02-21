const hre = require("hardhat");

async function main() {
  const Factory = await hre.ethers.getContractFactory("FTDSoulbound");
  const contract = await Factory.deploy("FTD Master", 2026);
  await contract.waitForDeployment();
  console.log("FTDSoulbound deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

