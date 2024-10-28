type TcourseCards = {
  bgColor: string;
  heading?: string;
  headingColor: string;
  paraColor: string;
  squareColor: string;
  borderLineColor: string;
};

export default function CourseCards({
  bgColor,
  heading,
  headingColor,
  paraColor,
  squareColor,
  borderLineColor,
}: TcourseCards) {
  return (
    <div
      className={`${bgColor} w-[328px] py-[35px] px-[40px] flex flex-col justify-center gap-5 shadow-lg`}
    >
      <div
        className={`imgsquare w-[70px] h-[76px] px-[19px] py-[22px] ${squareColor} rounded-[10px] ml-[10px]`}
      ></div>
      <h5 className={`text-base font-bold ${headingColor}`}>
        {heading ? heading : "training Courses"}
      </h5>
      <div className={`borderLine w-[50px] h-[2px] ${borderLineColor}`}> </div>
      <p className={`text-sm font-normal ${paraColor}`}>
        The gradual accumulation of information about atomic and small-scale
        behaviour...
      </p>
    </div>
  );
}
