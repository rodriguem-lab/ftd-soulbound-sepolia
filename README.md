# FTD Soulbound Token (Sepolia Deployment)

Smart contract implementation of a non-transferable academic credential deployed on Ethereum Sepolia testnet.

Overview
This project implements a Soulbound Token issued to students upon completion of the FTD Master program. The token is permanently bound to the student’s wallet and cannot be transferred.

The objective is to provide a verifiable, on-chain credential that complements traditional academic diplomas. Each cohort (e.g., 2026, 2027) is associated with a distinct deployment and metadata configuration.

Technical Specifications
Standard: ERC-721 (OpenZeppelin v5)
Language: Solidity ^0.8.20
Network: Ethereum (Sepolia testnet)
Metadata storage: IPFS
The contract enforces non-transferability at the protocol level and restricts minting rights to the issuer.

Core Functions
mint(address student)
mintBatch(address[] students)
revoke(uint256 tokenId)
setCohortURI(string newURI)
Transfers are disabled in the internal _update function to ensure Soulbound behavior.

Metadata Architecture
Each cohort follows a two-step IPFS process:

Upload the cohort image to IPFS
Create and upload a metadata JSON file referencing the image CID
The contract’s tokenURI() function returns the metadata CID, ensuring that all tokens of the same cohort share a consistent visual and descriptive identity.

Example metadata structure:

{
  "name": "FTD Master 2026 - Soulbound Credential",
  "description": "Official academic credential issued by FTD",
  "image": "ipfs://CID_IMAGE"
}

Deployed Contract (Sepolia):
0xE55725bA42D39ee7CA3a01585B7861612142C7BF
