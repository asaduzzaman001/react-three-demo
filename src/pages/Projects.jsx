import Line from "../components/Line";
import { lineData } from "../data/lineData";

export default function Projects() {
  return (
    <section id="sec-2" className="p-10 pb-0 flex flex-col gap-10">
      <small>featured projects</small>
      <div className="line-container grow p-5 flex flex-col justify-evenly">
        {lineData.map((data, index) => (
          <Line key={index} data={data} />
        ))}
      </div>
    </section>
  );
}
