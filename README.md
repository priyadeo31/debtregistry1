# debtregistry1
Project Description
This project is a Debt Registry smart contract built in Solidity.
It allows users to record, update, and clear debts between different Ethereum addresses.
The project is designed to be beginner-friendly, easy to understand, and a great starting point for learning decentralized record-keeping.

🚀 What It Does
Stores debt records between a debtor and a creditor.
Allows users to add and update debts through transactions.
Makes all records transparent and traceable on the blockchain.
Helps track who owes whom in a decentralized manner.

✨ Features
✅ Simple and clean Solidity code
✅ Mapping-based debt tracking
✅ Add new debts
✅ Update previous debts
✅ Clear debts
✅ Emits events for every action
✅ Beginner-friendly structure
🔗 Deployed Smart Contract
Coston2 Testnet Explorer:
(https://coston2-explorer.flare.network/address/0xD12Fbf6E4023488558F72e5fbf6C838b4336BfB8?tab=index)
🧱 Smart Contract Code
{
	"compiler": {
		"version": "0.8.30+commit.73712a01"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "creditor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "addDebt",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "creditor",
						"type": "address"
					}
				],
				"name": "clearDebt",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "debts",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "debtor",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "creditor",
						"type": "address"
					}
				],
				"name": "getDebt",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "creditor",
						"type": "address"
					}
				],
				"name": "myDebt",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"piyu.sol": "DebtRegistry"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": true,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"piyu.sol": {
			"keccak256": "0xf7ec3bec235d460d1c97dad13732717b6565ff75eca5b5e1ce949e74a29429de",
			"license": "MIT",
			"urls": [
				"bzz-raw://3c54f289b2cebf9a6d1328ceb229e097396f66ddd48cc00d9c26c45954d43c3d",
				"dweb:/ipfs/QmUFpohxi7qbcRqbYXA9iQtiijRAYER7JsPXZDCwpPZw4J"
			]
		}
	},
	"version": 1
}
📝 How to Use
Copy the contract into Remix IDE
Compile using Solidity ^0.8.x
Deploy on Coston2 / any EVM-compatible testnet
Interact with the functions:
addDebt()
updateDebt()
clearDebt()
View mapping: debts(debtor, creditor)

📚 Ideal For
Blockchain beginners
Students
Hackathon projects

Anyone learning Solidity

Small apps managing shared expenses
