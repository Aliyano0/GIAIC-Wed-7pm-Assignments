import CourseCards from "./components/CourseCards";

export default function Home() {
  return (
    <div className="w-[1046px] mx-auto py-20 flex flex-col gap-20">
      <div className=" main-container w-[701px] mx-auto">
        <div className=" main-content flex flex-col items-center gap-10 w-[699px] py-10 ">
          <h5 className="text-base font-bold text-[#23A6F0] text-center">
            Welcome
          </h5>
          <h1 className="w-[542px] font-bold text-6xl text-center leading-[80px]">
            Selling on the internet like a pro
          </h1>
          <h4 className="w-[536px] text-xl font-normal text-center leading-[30px]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          
          <div className="main-btns flex items-center gap-[10px]">
            <button className="font-bold text-sm text-center rounded-[5px] px-10 py-[15px] bg-[#23A6F0] hover:hover:bg-[#0b1954]">
              Get Quote Now
            </button>
            <button className="font-bold text-sm text-center rounded-[5px] px-10 py-[15px] border-[#23A6F0] border-[1px] text-[#23A6F0] hover:border-[#fff] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="courses w-full flex items-center gap-[30px] mb-10">
        <CourseCards
          key={1}
          bgColor={"bg-white"}
          headingColor={"text-[#252B42]"}
          paraColor={"text-[#737373]"}
          squareColor={"bg-[#FFDCD1]"}
          borderLineColor={"bg-[#E74040]"}
        />

        <CourseCards
          key={2}
          bgColor={"bg-white"}
          heading="2,769 online courses"
          headingColor={"text-[#252B42]"}
          paraColor={"text-[#737373]"}
          squareColor={"bg-[#B9EAA8]"}
          borderLineColor={"bg-[#E74040]"}
        />

        <CourseCards
          key={3}
          bgColor={"bg-[#23A6F0]"}
          headingColor={"text-white"}
          paraColor={"text-white"}
          squareColor={"bg-white"}
          borderLineColor={"bg-white"}
        />
      </div>
    </div>
  );
}
