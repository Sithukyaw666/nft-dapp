const Install = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-card py-8 px-10 rounded-lg shadow-md">
        <p className="font-Dinosaur text-4xl text-primary text-center">
          NFT WORLD
        </p>
        <h1 className="text-center text-white  font-semibold py-6">
          You need to install metamask wallet first{" "}
        </h1>

        <div className="flex items-center justify-center">
          <button className="text-center px-6 py-3 border-2 rounded-lg border-primary">
            <a
              className="text-center text-primary"
              href="https://metamask.io/download.html"
            >
              Click to install Metamask
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
