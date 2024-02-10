import React, { useEffect, useState } from "react";
import Details from "./Details";

function NFTImage({
  tokenId,
  contract,
  isMinted,

  contractAddress,
}) {
  const contentId = "Qmdbpbpy7fA99UkgusTiLhMWzyd3aETeCFrz7NpYaNi6zY";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const [showDetail, setShowDetail] = useState(false);

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  const [owner, setOwner] = useState();
  const getOwner = async () => {
    const o = await contract.ownerOf(tokenId);
    console.log(o);
    setOwner(o);
  };
  const imageURI = `img/${tokenId}.png`;

  return (
    <>
      <div className="bg-card text-white p-2 shadow-md rounded-md ">
        <img
          className="w-auto h-auto"
          src={isMinted ? imageURI : "img/placeholder.png"}
        ></img>
        <div className="w-full py-3 text-blue-600 flex flex-col justify-between items-start">
          <h5 className="font-medium">Pot NFT ID #{tokenId}</h5>

          {isMinted && (
            <button
              className="border-2 border-emerald-600 px-4 font-medium text-emerald-600 py-1 rounded-md mt-3"
              onClick={() => {
                getOwner();
                setShowDetail(true);
              }}
            >
              Taken! Show Details
            </button>
          )}
        </div>
      </div>
      <Details
        showDetail={showDetail}
        contractAddress={contractAddress}
        setShowDetail={setShowDetail}
        owner={owner}
        tokenId={tokenId}
      />
    </>
  );
}

export default NFTImage;
