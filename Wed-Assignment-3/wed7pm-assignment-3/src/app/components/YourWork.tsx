import Button from "./Utils/Button";

const YourWork = () => {
  return (
    <>
      <div className="w-[1920px] h-[574px] px-[220px] py-[140px] bg-[#043873]">
        <div
          className="heading w-[1481px] h-[294px] flex items-center flex-col
        gap-[60px] "
        >
          <div className="text w-[1064px] h-[171px] text-white">
            <h1 className="w-[1064px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] mb-6">
              Your work, everywhere you are
            </h1>
            <p className="w-[1064px] h-[60px] text-lg leading-[30px] tracking-[-2%] text-center">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <Button text="Try Taskey" hero={false} />
        </div>
      </div>
    </>
  );
};

export default YourWork;
