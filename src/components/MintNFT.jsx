import React, { useState, useEffect } from "react";

import { ethers } from "ethers";
const MintNFT = ({
  tokenId,
  getCount,
  contract,
  totalMinted,
  setIsMinted,
  isMinted,
}) => {
  const contentId = "Qmdbpbpy7fA99UkgusTiLhMWzyd3aETeCFrz7NpYaNi6zY";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  //   const imageURI = `img/${tokenId}.png`;

  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    // const connection = contract.connect(signer);
    // const addr = connection.address;
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const result = await contract.payToMint(account, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };
  return (
    <div className=" w-full h-full ml-2  bg-card  px-6 py-2">
      <h1 className="text-4xl font-Dinosaur text-white py-2">
        Mint Your <span className="text-primary">NFTs</span>
      </h1>
      <hr className="text-white" />
      <p className="text-white py-2">
        The Pot NFT collection showcases a delightful fusion of nature and
        artistry, each piece capturing a unique essence within a potted plant
        setting. From the tranquil woods to the sandy landscapes, these NFTs
        feature various plants, including snake plants, eucalyptus, cacti, and
        flowers, each in their distinctive pots such as cauldrons, ceramic pots,
        and foam planters. The background scenery, whether it's the mysterious
        midnight shadows or the bright noonday sun, adds an extra layer of
        atmosphere to each composition. The facial expressions of the plants,
        ranging from calm and curious to smiling and in love, further infuse
        these digital artworks with a touch of emotion and personality
      </p>
      <div className="w-full py-4">
        <div className="flex justify-between pb-4 text-white">
          <div>
            <p className="font-medium">Mint Price</p>
            <p className="font-semibold text-primary text-xl">0.05 GO</p>
          </div>
          <div>
            <p className="font-medium">Remaining NFTs</p>
            <p className="font-semibold text-primary text-xl">
              {16 - totalMinted}
            </p>
          </div>
        </div>
        <button
          onClick={mintToken}
          className="px-6 py-2 bg-primary text-white rounded-xl font-medium"
        >
          Mint Now
        </button>
      </div>
    </div>
  );
};

export default MintNFT;
