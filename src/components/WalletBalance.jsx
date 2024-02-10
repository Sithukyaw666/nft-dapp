import { useState } from "react";
import { ethers } from "ethers";

function WalletBalance() {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className=" w-full  p-2 bg-blue-200 rounded-lg">
      <div className="h-full px-5 flex justify-between items-center">
        <h5 className="">Your Balance: {balance}</h5>
        <button
          className="bg-blue-500 px-4 py-2 rounded-md shadow text-white font-medium"
          onClick={() => getBalance()}
        >
          Show My Balance
        </button>
      </div>
    </div>
  );
}

export default WalletBalance;
