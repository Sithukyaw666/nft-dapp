import React, { useEffect, useState } from "react";
import assetMetadata from "../assets/asset-metadata.json";
import image0 from "../assets/0.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getAccount();
  }, []);
  const getAccount = async () => {
    const [acc] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(acc);
  };
  console.log(account);
  const connectToWallet = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      navigate("/install");
    }
  };
  const getStarted = () => {
    navigate("/mint");
  };

  return (
    <div className="">
      <div className="pt-6 relative  pl-6 ">
        <div className="h-40 mt-8">
          <h1 className="font-Dinosaur  text-9xl px-6  text-white ">
            <span className="absolute left-16 z-0 top-16 text-shadow">
              NFT WORLD
            </span>
            <span className=" absolute z-20">NFT WORLD</span>
          </h1>
        </div>
        <div className="mx-16">
          <button
            onClick={account ? getStarted : connectToWallet}
            className="px-6 space-x-3 py-2 bg-primary rounded-full text-white font-medium text-lg  capitalize"
          >
            {account ? "Get Started" : "Connect to Wallet"}
          </button>
        </div>
      </div>
      <div className="flex  justify-center items-center pb-1 ">
        <div className="grid grid-rows-1 grid-flow-col gap-8 place-items-center">
          <div className="row-start-3 row-span-5 w-72  ">
            <div className="px-2  ">
              <img className="rounded-full" src={image0} alt="" />
              {/* <div>
                <p className="text-center font-medium">
                  {assetMetadata.colletions[0].description}
                </p>
              </div> */}
              <h1 className="text-center py-3 font-medium text-lg font-Dinosaur text-primary  ">
                {assetMetadata.colletions[0].name}
              </h1>
            </div>
          </div>
          <div className="row-start-2 row-span-5 w-72  ">
            <div className="px-2 py-2 ">
              <img className="rounded-full" src={image1} alt="" />
              {/* <div>
                <p className="text-center font-medium">
                  {assetMetadata.colletions[1].description}
                </p>
              </div> */}
              <h1 className="text-center py-3 font-medium text-lg font-Dinosaur text-primary  ">
                {assetMetadata.colletions[1].name}
              </h1>
            </div>
          </div>
          <div className="row-start-1 row-span-5 w-72 ">
            <div className="px-2 py-2 ">
              <img className="rounded-full" src={image2} alt="" />
              {/* <div>
                <p className="text-center font-medium">
                  {assetMetadata.colletions[2].description}
                </p>
              </div> */}
              <h1 className="text-center py-3 font-medium text-lg font-Dinosaur text-primary  ">
                {assetMetadata.colletions[2].name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
