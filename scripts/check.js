const hre = require("hardhat");

async function main() {
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const student = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

  const contract = await hre.ethers.getContractAt("FTDSoulbound", contractAddress);

  const bal = await contract.balanceOf(student);
  console.log("balanceOf(student) =", bal.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
