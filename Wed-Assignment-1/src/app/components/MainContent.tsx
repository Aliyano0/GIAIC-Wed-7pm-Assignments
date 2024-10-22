import Image from "next/image";
import Link from "next/link";

type propsType = {
  heading: string;
  imageUrl: string;
  softwareEngUrl?: string;
};

const MainContent = ({ heading, imageUrl, softwareEngUrl }: propsType) => {
  return (
    <div>
      <div className="content-container w-full h-screen px-16 flex justify-between items-center text-indigo-800">
        <div className="left-container w-[45%] py-4">
          <h1 className="text-8xl font-bold uppercase">{heading}</h1>
          <h1 className="text-8xl font-bold uppercase">Page</h1>
          <p className="text-xl w-2/3 font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            blanditiis error sapiente autem doloremque sequi minus nam non
            quidem, exercitationem cum earum. Voluptatem placeat pariatur
            recusandae consequatur iure et error nam rerum dolorum ipsa
            inventore voluptatibus omnis, beatae facilis? Iure!
          </p>

          {softwareEngUrl && (
            <button className="bg-indigo-500 text-white text-lg font-bold px-4 py-5 rounded-lg mt-10">
              <Link href={softwareEngUrl}>SOFTWARE ENGINEERING</Link>
            </button>
          )}
        </div>
        <div className="right-container w-[55%] h-[61%] overflow-hidden rounded-2xl  shadow-xl object-cover">
          <Image
            src={imageUrl}
            alt="Neon Type Image"
            width={950}
            height={600}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
