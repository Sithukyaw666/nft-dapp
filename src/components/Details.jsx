import React from "react";

const Details = ({
  showDetail,
  contractAddress,
  owner,
  tokenId,
  setShowDetail,
}) => {
  console.log(showDetail);
  return (
    <div
      className={`bg-card px-6 py-4 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        showDetail ? "block" : "hidden"
      }`}
    >
      <h1 className="text-center text-white font-semibold text-lg">
        Pot NFT ID #{tokenId}
      </h1>
      <p className="text-white font-medium">
        Contract Address :{" "}
        <span className="text-primary">{contractAddress}</span>
      </p>
      <p className="text-white font-medium">
        Owned By :<span className="text-primary "> {owner}</span>
      </p>
      <div className="pt-4">
        <button
          onClick={() => setShowDetail(false)}
          className="px-6 py-2 border-2 border-primary font-medium text-primary rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Details;
