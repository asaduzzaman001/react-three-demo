export default function Line({ data }) {
  return (
    <div className="flex gap-20 w-[85%] opacity-35 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
      <p className="mt-2 text-sm w-32 font-semibold text-end">
        <span>
          {data.startDate} {data.startDate === "" ? "" : "-"}
        </span>{" "}
        <span className={`uppercase`}>{data.endDate}</span>
      </p>
      <h3 className="text-7xl font-extralight capitalize">{data.name}</h3>
    </div>
  );
}
