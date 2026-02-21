import hre from "hardhat";

async function main() {
  console.log("Keys available on hre:", Object.keys(hre));

  // Try Viem first (Hardhat 3 default direction)
  // @ts-ignore
  if (hre.viem) {
    console.log("Using hre.viem...");
    // @ts-ignore
    const contract = await hre.viem.deployContract("FTDSoulbound", [
      "FTD Master",
      2026,
    ]);
    console.log("FTDSoulbound deployed to:", contract.address);
    return;
  }

  // Fallback to ethers if available
  // @ts-ignore
  if (hre.ethers) {
    console.log("Using hre.ethers...");
    // @ts-ignore
    const Factory = await hre.ethers.getContractFactory("FTDSoulbound");
    // @ts-ignore
    const contract = await Factory.deploy("FTD Master", 2026);
    // @ts-ignore
    await contract.waitForDeployment();
    // @ts-ignore
    console.log("FTDSoulbound deployed to:", await contract.getAddress());
    return;
  }

  throw new Error(
    "Neither hre.viem nor hre.ethers is available. Your Hardhat project template/plugins aren't enabled."
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
