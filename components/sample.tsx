// components/sample.tsx
"use client";
import { useState } from "react";
import { useContract } from "../hooks/useContract";

const Sample = () => {
  const { wallet, contract, connectWallet, loading, error } = useContract();

  const [creditor, setCreditor] = useState("");
  const [amount, setAmount] = useState("");
  const [viewDebtor, setViewDebtor] = useState("");
  const [viewCreditor, setViewCreditor] = useState("");
  const [debtResult, setDebtResult] = useState<string | null>(null);

  const addDebt = async () => {
    if (!contract) return;
    try {
      const tx = await contract.addDebt(creditor, amount);
      await tx.wait();
      alert("Debt added successfully");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const updateDebt = async () => {
    if (!contract) return;
    try {
      const tx = await contract.updateDebt(creditor, amount);
      await tx.wait();
      alert("Debt updated successfully");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const clearDebt = async () => {
    if (!contract) return;
    try {
      const tx = await contract.clearDebt(creditor);
      await tx.wait();
      alert("Debt cleared");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const getDebt = async () => {
    if (!contract) return;
    try {
      const result = await contract.getDebt(viewDebtor, viewCreditor);
      setDebtResult(result.toString());
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4 space-y-4 border rounded-md">
      {!wallet ? (
        <button
          onClick={connectWallet}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      ) : (
        <p className="text-green-600">Wallet: {wallet}</p>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {wallet && (
        <>
          <h2 className="font-bold">Manage Debt</h2>
          <input
            placeholder="Creditor address"
            className="border p-2 rounded w-full"
            value={creditor}
            onChange={(e) => setCreditor(e.target.value)}
          />
          <input
            placeholder="Amount"
            className="border p-2 rounded w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-black text-white rounded" onClick={addDebt}>
              Add Debt
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={updateDebt}>
              Update Debt
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={clearDebt}>
              Clear Debt
            </button>
          </div>

          <h2 className="font-bold mt-4">View Debt</h2>
          <input
            placeholder="Debtor address"
            className="border p-2 rounded w-full"
            value={viewDebtor}
            onChange={(e) => setViewDebtor(e.target.value)}
          />
          <input
            placeholder="Creditor address"
            className="border p-2 rounded w-full"
            value={viewCreditor}
            onChange={(e) => setViewCreditor(e.target.value)}
          />

          <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={getDebt}>
            Get Debt
          </button>

          {debtResult !== null && (
            <p className="mt-2 font-semibold">Debt Amount: {debtResult}</p>
          )}
        </>
      )}
    </div>
  );
};

export default Sample;
