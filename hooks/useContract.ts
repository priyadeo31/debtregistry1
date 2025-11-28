// hooks/useContract.ts
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "../lib/contract";

export const useContract = () => {
  const [wallet, setWallet] = useState<string | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      setLoading(true);
      if (!(window as any).ethereum) {
        setError("MetaMask not detected");
        return;
      }
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setSigner(signer);
      setWallet(await signer.getAddress());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!signer) return;
    const c = getContract(signer);
    setContract(c);
  }, [signer]);

  return {
    wallet,
    signer,
    contract,
    loading,
    error,
    connectWallet,
  };
};
