require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) throw new Error("Missing CONTRACT_ADDRESS in .env");

  const data = JSON.parse(fs.readFileSync("students.json", "utf8"));
  const students = data.students;

  if (!students || students.length === 0) {
    throw new Error("No students found in students.json");
  }

  const contract = await hre.ethers.getContractAt("FTDSoulbound", contractAddress);

  console.log("Contract:", contractAddress);
  console.log("Minting to", students.length, "students...");

  const tx = await contract.mintBatch(students);
  console.log("Tx sent:", tx.hash);

  await tx.wait();
  console.log("Batch mint completed");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
