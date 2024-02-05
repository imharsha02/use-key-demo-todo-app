const Header = () => {
  return (
    <div className=" mb-3 p-2 items-center grid justify-items-center grid-cols-[auto,1fr] ">
      <div className=" justify-self-start">
        <p>Icon</p>
      </div>
      <div>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Connect to the world
        </h1>
      </div>
    </div>
  );
};

export default Header;
