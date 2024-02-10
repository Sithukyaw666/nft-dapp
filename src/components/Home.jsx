import WalletBalance from "./WalletBalance";
import { useEffect, useState } from "react";
import NFTImage from "./NFTImage";

import { ethers } from "ethers";
import ArtNFT from "../artifacts/contracts/MyNFT.sol/ArtNFT.json";
import MintNFT from "./MintNFT";
import Details from "./Details";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, ArtNFT.abi, signer);

function Home() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div className="w-full px-4 pt-2 transition-all ease-linear">
      {/* <WalletBalance /> */}

      <h1 className="text-center text-7xl p-6 font-bold font-Dinosaur text-primary">
        Pot NFT Collections
      </h1>
      <div className="container px-4 py-4 flex  ">
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-3">
            {Array(totalMinted)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="">
                  {console.log({ i })}
                  <NFTImage
                    tokenId={i}
                    contract={contract}
                    isMinted={isMinted}
                    setIsMinted={setIsMinted}
                    contractAddress={contractAddress}
                  />
                </div>
              ))}
          </div>
        </div>
        <MintNFT
          getCount={getCount}
          tokenId={totalMinted + 1}
          contract={contract}
          totalMinted={totalMinted}
          isMinted={isMinted}
          setIsMinted={setIsMinted}
        />
      </div>
    </div>
  );
}

export default Home;
