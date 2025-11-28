// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DebtRegistry {

    // Mapping: debtor => creditor => amount
    mapping(address => mapping(address => uint256)) public debts;

    // Events
    event DebtAdded(address indexed debtor, address indexed creditor, uint256 amount);
    event DebtUpdated(address indexed debtor, address indexed creditor, uint256 newAmount);
    event DebtCleared(address indexed debtor, address indexed creditor);

    // Add debt (debtor adds how much they owe creditor)
    function addDebt(address creditor, uint256 amount) external {
        require(creditor != address(0), "Invalid creditor");
        require(amount > 0, "Amount must be > 0");

        debts[msg.sender][creditor] += amount;

        emit DebtAdded(msg.sender, creditor, amount);
    }

    // Update an existing debt (overwrite)
    function updateDebt(address creditor, uint256 newAmount) external {
        require(creditor != address(0), "Invalid creditor");

        debts[msg.sender][creditor] = newAmount;

        emit DebtUpdated(msg.sender, creditor, newAmount);
    }

    // Clear debt (set to zero)
    function clearDebt(address creditor) external {
        require(creditor != address(0), "Invalid creditor");

        debts[msg.sender][creditor] = 0;

        emit DebtCleared(msg.sender, creditor);
    }

    // View a specific debt
    function getDebt(address debtor, address creditor) external view returns (uint256) {
        return debts[debtor][creditor];
    }
}
