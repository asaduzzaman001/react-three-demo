import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section id="sec-1" className="px-10 flex flex-col gap-5">
      <Navbar />
      <div className="line rotate-45 top-[23%] right-[23%]"></div>
      <div className="line bottom-[10%] left-[15%] -rotate-50 h-[50%]"></div>
      <div className="flex w-full grow">
        <div className="capitalize grow flex justify-end max-w-1/2 pt-28 px-14">
          <h1 className="text-9xl leading-[0.8] text-end font-[times-new-roman] font-extrabold">
            We <br />
            make <br />
            good <br /> shit
          </h1>
        </div>
        <div className="grow max-w-1/2 flex flex-col gap-5 items-start justify-end pl-20 pr-20 ">
          <h2 className="text-2xl w-[85%] font-extralight opacity-90">
            Dogstudio is a multidisciplinary creative studio at the intersection
            of art, design and technology.
          </h2>
          <p className="text-sm w-[85%] opacity-50">
            Our goal is to deliver amazing experiences that make people talk,
            and build strategic value for brands, tech, entertainment, arts &
            culture.
          </p>
        </div>
      </div>
    </section>
  );
}
