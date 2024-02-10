import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import ArtNFT from "../artifacts/contracts/MyNFT.sol/ArtNFT.json";

const Profile = () => {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // get the end user
  const signer = provider.getSigner();

  // get the smart contract
  const contract = new ethers.Contract(contractAddress, ArtNFT.abi, signer);
  useEffect(() => {
    getTokens();
  }, []);
  const [token, setToken] = useState();
  const getTokens = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const balance = await contract.balanceOf(account);
    const balances = Number(balance.toString());
    console.log(balances);

    for (let i = 0; i < balances; i++) {
      const tokenId = await contract.methods.tokenOfOwnerByIndex(account, i);
      console.log(tokenId);
    }
  };
  return <div>Profile</div>;
};
export default Profile;
